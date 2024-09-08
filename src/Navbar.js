import "./App.css";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdMiscellaneousServices } from "react-icons/md";
import { IoSave, IoStatsChart, IoNotificationsCircleSharp } from "react-icons/io5";
import { RiErrorWarningFill } from "react-icons/ri";
import { FaHome, FaUserCircle } from 'react-icons/fa';
import { Container, Row, Col, Nav, Image, Navbar, NavDropdown } from 'react-bootstrap';

function NavBar() {
    const [show, setShow] = useState(false);
    const [notificationCount, setNotificationCount] = useState(3);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    return (
        <>
            <Row className="bg-body-secondary align-items-center py-2">
                <Col xs={2} className="text-start">
                    <Image src="ncip.png" alt="NCIP Logo" height="80" />
                </Col>
                <Col xs={8} className="text-center"></Col>
                <Col xs={1} className="text-end ms-5">
                    <Image src="ph-logo.png" alt="Bagong Pilipinas Logo" height="80" className='ms-5' />
                </Col>
            </Row>
            <Navbar expand="lg" className="mb-2">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Col xs={2} className="text-start">
                            <Nav className="align-items-center">
                                <NavLink to="/dashboard" className='fw-bold font me-2 d-flex align-items-center nav-link'>
                                    <FaHome className='me-2' />Home
                                </NavLink>

                                <NavDropdown 
                                    title={<><MdMiscellaneousServices className='me-2' /> Services</>} 
                                    id="services-nav-dropdown" 
                                    className='fw-bold font me-2 d-flex align-items-center'
                                >
                                    <NavDropdown.Item as={NavLink} to="/issuanceofcoc">Issuance of COC</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/healthservices">Health Services</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/educationalassistance">Educational Assistance Program</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown 
                                    title={<><IoSave className='me-2' /> Records</>} 
                                    id="records-nav-dropdown" 
                                    className='fw-bold font me-2 d-flex align-items-center'
                                >
                                    <NavDropdown.Item as={NavLink} to="/ipform">IP Form</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/ipprofile">IP Profile</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link 
                                    as={NavLink} 
                                    to="/statistics" 
                                    className='fw-bold font me-2 d-flex align-items-center'
                                >
                                    <IoStatsChart className='me-2' /> Statistics
                                </Nav.Link>

                                <Nav.Link 
                                    as={NavLink} 
                                    to="/programs" 
                                    className='fw-bold font me-2 d-flex align-items-center'
                                >
                                    <RiErrorWarningFill className='me-2' /> Programs
                                </Nav.Link>
                            </Nav>
                        </Col>
                        <Col xs={8} className="text-center"></Col>
                        <Col xs={2} className="text-end d-flex align-items-center justify-content-end position-relative">
                            <Nav className="d-flex align-items-center">
                                <Nav.Item className="position-relative me-2">
                                    <Nav.Link as={NavLink} to="/requestaccess" style={{ padding: 0, margin: 0 }}>
                                        <IoNotificationsCircleSharp 
                                            size={37}
                                            onClick={handleShow}
                                            style={{ cursor: 'pointer' }}
                                        />
                                        {notificationCount > 0 && (
                                            <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                                                {notificationCount}
                                                <span className="visually-hidden">unread messages</span>
                                            </span>
                                        )}
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavDropdown
                                        title={<FaUserCircle size={30} />}
                                        id="user-nav-dropdown"
                                        className='fw-bold font'
                                        align="end" 
                                        drop="bottom" 
                                    >
                                        <NavDropdown.Item as={NavLink} to="/userprofile">User Profile</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={NavLink} to="/">Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
