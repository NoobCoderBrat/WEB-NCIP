import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, FloatingLabel, InputGroup, Modal } from 'react-bootstrap';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaIdBadge } from "react-icons/fa";
import './App.css';

function Login() {
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <>
            <Container fluid className="p-0 m-0 vh-100 text">
                <Row className="m-0 h-100">
                    <Col
                        xs={12}
                        md={6}
                        className="bg-image d-flex flex-column align-items-center justify-content-center text-center text-white"
                    >
                        <div className="logo-container">
                            <img src="ncip-logo.png" alt="Logo 1" className="logo mb-3" />
                        </div>
                        <h1 className='font'>Survey Profiling Management System of NCIP Buenavista Community Service Center</h1>
                    </Col>
                    <Col
                        xs={12}
                        md={6}
                        className="d-flex align-items-center justify-content-center"
                    >
                        <div className="login-form">
                            <h2 className="text-center mb-4 font">Sign in</h2>
                            <Form>
                                <InputGroup className="mb-2">
                                    <InputGroupText><FaIdBadge /></InputGroupText>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="ID"
                                    >
                                        <Form.Control type="text" placeholder="name@example.com" />
                                    </FloatingLabel>
                                </InputGroup>
                                <InputGroup className="mb-2">
                                    <InputGroupText><FaUserAlt /></InputGroupText>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Name"
                                    >
                                        <Form.Control type="text" placeholder="name@example.com" />
                                    </FloatingLabel>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroupText><RiLockPasswordFill /></InputGroupText>
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                        <Form.Control type="password" placeholder="Password" />
                                    </FloatingLabel>
                                </InputGroup>
                                <Row className="g-2 mb-4">
                                    <Col xs={4}>
                                        <FloatingLabel controlId="floatingSelect" label="Login as:">
                                            <Form.Select aria-label="Floating label select example">
                                                <option value="#">Admin</option>
                                                <option value="#">Employee</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                    <Col>
                                        <Button variant="primary" className='w-100 fw-bold login-btn'>Login</Button>
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

            <Modal show={showModal} onHide={handleClose} className='text'>
                <Modal.Header closeButton>
                    <Modal.Title className='font fw-bold'>REGISTER AN ACCOUNT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <InputGroup className="mb-2">
                            <InputGroupText><FaIdBadge /></InputGroupText>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="ID"
                            >
                                <Form.Control type="text" placeholder="name@example.com" />
                            </FloatingLabel>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <InputGroupText><FaUserAlt /></InputGroupText>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Name"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <InputGroupText><RiLockPasswordFill /></InputGroupText>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <InputGroupText><RiLockPasswordFill /></InputGroupText>
                            <FloatingLabel controlId="floatingPassword" label="Confirm password">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>
                        </InputGroup>
                        <FloatingLabel controlId="floatingSelect" label="Register as:">
                            <Form.Select aria-label="Floating label select example">
                                <option value="#">Admin</option>
                                <option value="#">Employee</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center'>
                    <Button className='w-50 fw-bold login-btn' variant="primary" onClick={() => alert('Registering...')}>
                        Register
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Login;
