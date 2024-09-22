import "./App.css";
import NavBar from "./Navbar.js";
import { Container, Form, Row, Col, FloatingLabel, Card, Button } from "react-bootstrap";

function IPForm() {
    return (
        <>
            <Container fluid>
                <NavBar />
                <Container className="mt-3">
                    <Card className="p-3 shadow mb-5">
                        <Card.Body className="text">
                            <Row>
                                <Col xs={12} md={6} className="mb-3">
                                    <FloatingLabel controlId="floatingCADT" label="CADT" className="mb-2">
                                        <Form.Control type="text" placeholder="CADT" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingIPGroup" label="IP Group" className="mb-2">
                                        <Form.Control type="text" placeholder="IP Group" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingLeader" label="Recognized Leader" className="mb-2">
                                        <Form.Control type="text" placeholder="Recognized Leader" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingName" label="Name" className="mb-2">
                                        <Form.Control type="text" placeholder="Name" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingAge" label="Age" className="mb-2">
                                        <Form.Control type="text" placeholder="Age" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingBirthdate" label="Birthdate" className="mb-2">
                                        <Form.Control type="text" placeholder="Birthdate" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingAddress" label="Address" className="mb-2">
                                        <Form.Control type="text" placeholder="Address" />
                                    </FloatingLabel>

                                    <p className="font">Gender</p>
                                    <Row className="mb-3">
                                        <Col xs={4} sm={3} md={2}>
                                            <Form.Group className="mb-2">
                                                <Form.Check type="checkbox" label="Male" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={4} sm={3} md={2}>
                                            <Form.Group className="mb-2">
                                                <Form.Check type="checkbox" label="Female" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={4} sm={3} md={2}>
                                            <Form.Group className="mb-2">
                                                <Form.Check type="checkbox" label="LGBTQ" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <p className="font">Available Documents</p>
                                    <Row>
                                        <Col xs={6} sm={4} md={5}>
                                            <Form.Group className="mb-2">
                                                <Form.Check type="checkbox" label="Marriage Certificate" />
                                            </Form.Group>
                                            <Form.Group className="mb-2">
                                                <Form.Check type="checkbox" label="PhilHealth" />
                                            </Form.Group>
                                            <Form.Group className="mb-2">
                                                <Form.Check type="checkbox" label="Birth Certificate" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6} sm={4} md={4}>
                                            <Form.Group className="mb-2">
                                                <Form.Check type="checkbox" label="DSWD 4P's" />
                                            </Form.Group>
                                            <Form.Group className="mb-2">
                                                <Form.Check type="checkbox" label="Pension" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col xs={12} md={6}>
                                    <p className="font">Education</p>
                                    <FloatingLabel controlId="floatingGradeLevel" label="Grade Level" className="mb-2">
                                        <Form.Control type="text" placeholder="Grade Level" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingIPGroup2" label="IP Group" className="mb-2">
                                        <Form.Control type="text" placeholder="IP Group" />
                                    </FloatingLabel>

                                    <p className="font">EAP Scholar</p>
                                    <Row>
                                        <Col xs={4} sm={3}>
                                            <Form.Group className="mb-2">
                                                <Form.Check type="checkbox" label="Yes" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={4} sm={3}>
                                            <Form.Group className="mb-2">
                                                <Form.Check type="checkbox" label="No" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <p className="font">House</p>
                                    <Row>
                                        <Col xs={4} sm={3}>
                                            <Form.Group className="mb-2">
                                                <Form.Check type="checkbox" label="Owned" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={4} sm={3}>
                                            <Form.Group className="mb-2">
                                                <Form.Check type="checkbox" label="Rented" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={4} sm={3}>
                                            <Form.Group className="mb-2">
                                                <Form.Check type="checkbox" label="Lived with Parents" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <p className="font">Type of House</p>
                                    <Row>
                                        <Col xs={4}>
                                            <Form.Group className="mb-2">
                                                <Form.Check type="checkbox" label="Light Material" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={4}>
                                            <Form.Group className="mb-2">
                                                <Form.Check type="checkbox" label="Semi Concrete" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={4}>
                                            <Form.Group className="mb-2">
                                                <Form.Check type="checkbox" label="Concrete" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <p className="font">Health Concerns</p>
                                    <FloatingLabel controlId="floatingIllness" label="Type of Illness" className="mb-2">
                                        <Form.Control type="text" placeholder="Type of Illness" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingDuration" label="How long" className="mb-2">
                                        <Form.Control type="text" placeholder="How long" />
                                    </FloatingLabel>

                                    <Container className="d-flex justify-content-center mt-5">
                                        <Button className='w-50 fw-bold login-btn' variant="primary" onClick={() => alert('Saving...')}>
                                            Save
                                        </Button>
                                    </Container>

                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </>
    );
}

export default IPForm;
