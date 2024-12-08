import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, FloatingLabel, InputGroup, Modal, Spinner } from 'react-bootstrap';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import { FaUserAlt, FaIdBadge } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import './App.css';
import supabase from './config/supabaseClient';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [id, setID] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('Admin'); 
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);


    const login = async (e) => {
        e.preventDefault();

        if (!id || !password ) {
            alert("Please enter both email and password.");
            return;
        }

        try {
            const { data } = await supabase
                .from('users')
                .select('*')
                .eq('idnumber', id)
                .single();
            if (data && data.password === password && data.idnumber === id) {
                const role = data.role;
                sessionStorage.setItem('role', role);
                const user_id = data.idnumber;
                sessionStorage.setItem('user_id', user_id)
                navigate("/dashboard");
      
            } else {
                alert("INVALID CREDENTIALS");
            }
        } catch (error) {
            console.error('Error during login:', error.message);
        }
    };

    const register = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (password !== confirmpassword) {
          alert("Password does not match");
          return;
        }
        if (!name || !password || !id) {
          alert("Please enter all required fields.");
          return;
        }
        try {
          const { error, data } = await supabase.from("users").insert([
            {
              idnumber: id,
              name,
              password,
              role,
              is_verified: "false",
            },
          ]);
          if (error) {
            if (error.status === 409) {
              alert("Conflict: A user with this ID already exists.");
            } else {
              alert("A user with this ID already exists.");
            }
            console.error("Error during registration:", error.message);
          } else {
            reg_user_details();
          }
        } catch (error) {
          alert("An unexpected error occurred.");
          console.error("Error during registration:", error.message);
        
        }
        setLoading(false);
      };
    
      const reg_user_details = async (e) => {
        try {
          const { error, data } = await supabase.from("user_details").insert([
            {
              idnumber: id,
              name,
            },
          ]);
          if (error) {
            if (error.status === 409) {
              alert("Conflict: A user with this ID already exists.");
            } else {
              alert("A user with this ID already exists.");
            }
            console.error("Error during registration:", error.message);
          } else {
            alert("Registration Sucessful!");
            handleClose();
          }
        } catch (error) {
          alert("An unexpected error occurred.");
          console.error("Error during registration:", error.message);
        }
      };
    
    return (
        <>
            <Container fluid className="p-0 m-0 vh-100 text">
                <Row className="m-0 h-100">
                    <Col
                        xs={12}
                        md={6}
                        className="bg-image d-md-flex flex-column align-items-center justify-content-center text-center text-white"
                    >
                        <div className="logo-container">
                            <img src="ncip-logo.png" alt="Logo 1" className="logo mb-3" style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                        <h1 className='font'>Census Profiling Management System of NCIP Buenavista Community Service Center</h1>
                    </Col>
                    <Col
                        xs={12}
                        md={6}
                        className="d-flex align-items-center justify-content-center"
                    >
                        <div className="login-form" style={{ width: '100%', padding: '1rem' }}>
                            <h2 className="text-center mb-4 font mt-3">Sign in</h2>
                            <Form>
                                <InputGroup className="mb-2">
                                    <InputGroupText><FaIdBadge /></InputGroupText>
                                    <FloatingLabel 
                                        controlId="floatingInput" 
                                        label="ID"
                                        value={id}
                                        onChange={(e) => setID(e.target.value)}>
                                        <Form.Control type="text" placeholder="ID" autoComplete='off' required/>
                                    </FloatingLabel>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroupText><RiLockPasswordFill /></InputGroupText>
                                    <FloatingLabel 
                                        controlId="floatingPassword" 
                                        label="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}>
                                        <Form.Control type="password" placeholder="Password" />
                                    </FloatingLabel>
                                </InputGroup>
                                <Row className="g-2 mb-4">
                                    <Col xs={12} md={12}>
                                            <Button variant="primary" className='w-100 fw-bold login-btn' onClick={login}>Login</Button>
                                    </Col>
                                </Row>
                            </Form>
                            <Container className='d-flex justify-content-center'>
                                <p>Don't have an account? <span className='register' onClick={handleShow}>Create here</span></p>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>

                    <Modal show={showModal} onHide={handleClose} className="text" centered>
                    <Modal.Header closeButton>
                    <Modal.Title className="font fw-bold">
                        REGISTER AN ACCOUNT
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <InputGroup className="mb-2">
                        <InputGroupText>
                            <FaIdBadge />
                        </InputGroupText>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="ID"
                            value={id}
                            onChange={(e) => setID(e.target.value)}
                        >
                            <Form.Control
                            type="text"
                            placeholder="name@example.com"
                            autoComplete="off"
                            required
                            />
                        </FloatingLabel>
                        </InputGroup>
                        <InputGroup className="mb-2">
                        <InputGroupText>
                            <FaUserAlt />
                        </InputGroupText>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                            <Form.Control
                            type="text"
                            placeholder="name@example.com"
                            autoComplete="off"
                            required
                            />
                        </FloatingLabel>
                        </InputGroup>
                        <InputGroup className="mb-2">
                        <InputGroupText>
                            <RiLockPasswordFill />
                        </InputGroupText>
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                            <Form.Control
                            type={showPass ? "text" : "password"}
                            placeholder="Password"
                            autoComplete="off"
                            required
                            />
                        </FloatingLabel>
                        </InputGroup>
                        <InputGroup className="mb-2">
                        <InputGroupText>
                            <RiLockPasswordFill />
                        </InputGroupText>
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Confirm password"
                            value={confirmpassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        >
                            <Form.Control
                            type={showPass ? "text" : "password"}
                            placeholder="Password"
                            autoComplete="off"
                            required
                            />
                        </FloatingLabel>
                        </InputGroup>
                        <Form.Group className="mb-3 text-muted">
                        <Form.Check
                            type="checkbox"
                            label="Show password"
                            checked={showPass}
                            onChange={() => setShowPass(!showPass)}
                        />
                        </Form.Group>
                        <FloatingLabel controlId="floatingSelect" label="Register as:">
                        <Form.Select
                            aria-label="Floating label select example"
                            required
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="Admin">Admin</option>
                            <option value="Employee">Employee</option>
                        </Form.Select>
                        </FloatingLabel>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-center">
                    <Button
                        className="w-100 fw-bold login-btn"
                        variant="primary"
                        onClick={register}
                        disabled={loading}
                    >
                        {loading ? <Spinner animation="border" size="sm" /> : "Register"}
                    </Button>
                    </Modal.Footer>
                </Modal>
        </>
    );
}

export default Login;
