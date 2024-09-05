import React from 'react';
import { Container, Row, Col, Nav, Card, Button, ListGroup, ProgressBar } from 'react-bootstrap';
import NavBar from './Navbar.js';
import './App.css';

const UserProfile = () => {
  return (
    <>
        <Container fluid className="text">
            <NavBar />
            <Container className='mt-4'>
                <Row>
                    <Col lg={4}>
                        <Card className="mb-4 shadow">
                            <Card.Body className="text-center">
                                <Card.Img 
                                    variant="top" 
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" 
                                    alt="avatar" 
                                    className="rounded-circle img-fluid" 
                                    style={{ width: '150px' }} 
                                />
                                <Card.Title className="my-3">Marion Jotohot</Card.Title>
                                <Card.Text className="text-muted mb-1">Project Head II</Card.Text>
                                <Card.Text className="text-muted mb-4">Brgy. Lumbocan Butuan City</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={8}>
                        <Card className="mb-4 shadow">
                            <Card.Body>
                                <Row>
                                    <Col sm={3}>
                                        <p className="mb-0">Full Name</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0">Marion L. Jotohot</p>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm={3}>
                                        <p className="mb-0">Email</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0">jotohot.marion@gmail.com</p>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm={3}>
                                        <p className="mb-0">Phone</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0">09518149753</p>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm={3}>
                                        <p className="mb-0">Mobile</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0">(098) 765-4321</p>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm={3}>
                                        <p className="mb-0">Address</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0">P-6 Brgy. Lumbocan Butuan City</p>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm={3}>
                                        <p className="mb-0">Gender</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0">Male</p>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm={3}>
                                        <p className="mb-0">Birthday</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0">June 30, 2001</p>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm={3}>
                                        <p className="mb-0">Religion</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0">Roman Catholic</p>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm={3}>
                                        <p className="mb-0">Address</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0">P-6 Brgy. Lumbocan Butuan City</p>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm={3}>
                                        <p className="mb-0">Blood Type</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0">O+</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
  );
};

export default UserProfile;
