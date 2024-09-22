import "./App.css";
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MdMiscellaneousServices } from "react-icons/md";
import { IoSave, IoStatsChart, IoNotificationsCircleSharp } from "react-icons/io5";
import { RiErrorWarningFill } from "react-icons/ri";
import { FaHome, FaUserCircle } from 'react-icons/fa';
import { Container, Row, Col, Nav, Image, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

function NavBar() {
    const [show, setShow] = useState(false);
    const [notificationCount, setNotificationCount] = useState(3);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="d-none d-lg-block shadow mb-2">
                <Row className="bg-body-secondary align-items-center py-2">
                    <Col xs={2} className="text-start">
                        <Image src="ncip.png" alt="NCIP Logo" height="80" />
                    </Col>
                    <Col xs={8} className="text-center"></Col>
                    <Col xs={1} className="text-end ms-5">
                        <Image src="ph-logo.png" alt="Bagong Pilipinas Logo" height="80" className='ms-5' />
                    </Col>
                </Row>
            </div>

            <Navbar expand="lg" className={`mb-2 ${isMobile ? 'shadow bg-body-secondary mb-2' : ''}`}>
                <Container fluid>
                    <Navbar.Brand className="d-lg-none d-flex">
                        <Image src="ncip-logo.png" alt="NCIP Logo" height="60" />
                        <h2 className="font fw-bold mt-3 ms-2">NCIP-Buena</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" onClick={handleShow} />
                    <Navbar.Collapse id="navbarScroll" className="d-none d-lg-block">
                        <Col xs={2} className="text-start">
                            <Nav className="align-items-center w-100">
                                <NavLink to="/dashboard" className='fw-bold font me-2 d-flex align-items-center nav-link'>
                                    <FaHome className='me-2' />Home
                                </NavLink>
                                <NavDropdown 
                                    title={<><MdMiscellaneousServices className='me-2' /> Services</>} 
                                    id="services-nav-dropdown" 
                                    className='fw-bold font me-2 d-flex align-items-center'
                                >
                                    <NavDropdown.Item as={NavLink} to="/issuanceofcoc">Certificate of Confirmation</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/educationalassistance">Educational Assistance Program</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown 
                                    title={<><IoSave className='me-2' /> Records</>} 
                                    id="records-nav-dropdown" 
                                    className='fw-bold font me-2 d-flex align-items-center'
                                >
                                    <NavDropdown.Item as={NavLink} to="/ipform">Census Form</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/ipprofile">Census Records</NavDropdown.Item>
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

            <Offcanvas show={show} onHide={handleClose} className="d-lg-none w-75">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="font fw-bold">Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <NavLink to="/dashboard" className='font me-2 nav-link'>
                            <FaHome className='me-2' />Home
                        </NavLink>
                        <NavDropdown title={<><MdMiscellaneousServices className='me-2 font' /> Services</>} id="services-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/issuanceofcoc">Certificate of Confirmation</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/educationalassistance">Educational Assistance Program</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<><IoSave className='me-2 font' /> Records</>} id="records-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/ipform">Census Form</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/ipprofile">Census Records</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={NavLink} to="/statistics" className='font me-2'>
                            <IoStatsChart className='me-2' /> Statistics
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/programs" className='font me-2'>
                            <RiErrorWarningFill className='me-2' /> Programs
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/requestaccess">
                            <IoNotificationsCircleSharp className='me-2 font' /> Notification
                            {notificationCount > 0 && (
                                <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                                    {notificationCount}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            )}
                        </Nav.Link>
                        <NavDropdown title={<><FaUserCircle className='me-2 font' /> User Action</>} id="user-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/userprofile">User Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default NavBar;
