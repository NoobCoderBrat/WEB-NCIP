import "./App.css";
import NavBar from "./Navbar.js";
import { Container, Form, Row, Col, FloatingLabel, Card, Button } from "react-bootstrap";

function IPForm(){
    return(
        <>
            <Container fluid>
                <NavBar />
                <Container className="mt-3">
                    <Card className="p-3 shadow mb-5">
                        <Card.Body className="text">
                            <Row>
                                <Col>
                                    <FloatingLabel controlId="floatingPassword" label="CADT" className="mb-2">
                                        <Form.Control type="text" placeholder="CADT" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="IP Group" className="mb-2">
                                        <Form.Control type="text" placeholder="IP Group" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="Recognized Leader" className="mb-2">
                                        <Form.Control type="text" placeholder="Recognized Leader" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="Name" className="mb-2">
                                        <Form.Control type="text" placeholder="Name" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="Age" className="mb-2">
                                        <Form.Control type="text" placeholder="Age" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="Birthdate" className="mb-2">
                                        <Form.Control type="text" placeholder="Birthdate" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="Address" className="mb-2">
                                        <Form.Control type="text" placeholder="Address" /><br />
                                    </FloatingLabel>
                                    <p className="font">Gender</p>
                                    <Row className="mb-3">
                                        <Col xs={2}>
                                            <Form.Group className="mb-2" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Male" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={2}>
                                            <Form.Group className="mb-2" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Female" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={2}>
                                            <Form.Group className="mb-2" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="LGBTQ" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <p className="font">Available Documents</p>
                                    <Row>
                                        <Col xs={5}>
                                            <Form.Group className="mb-2" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Marriage Certificate" />
                                            </Form.Group>
                                            <Form.Group className="mb-2" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="PhilHealth" />
                                            </Form.Group>
                                            <Form.Group className="mb-2" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Birth Certificate" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={4}>
                                            <Form.Group className="mb-2" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="DSWD 4P's" />
                                            </Form.Group>
                                            <Form.Group className="mb-2" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Pension" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <p className="font">Education</p>
                                    <FloatingLabel controlId="floatingPassword" label="Grade Level" className="mb-2">
                                        <Form.Control type="text" placeholder="Grade Level" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="IP Group" className="mb-2">
                                        <Form.Control type="text" placeholder="IP Group" />
                                    </FloatingLabel><br />
                                    <p className="font">EAP Scholar</p>
                                    <Row>
                                        <Col xs={2}>
                                            <Form.Group className="mb-2" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Yes" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={2}>
                                            <Form.Group className="mb-2" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="No" />
                                            </Form.Group>
                                        </Col>
                                    </Row><br />
                                    <p className="font">House</p>
                                    <Row>
                                        <Col xs={2}>
                                            <Form.Group className="mb-2" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Owned" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={2}>
                                            <Form.Group className="mb-2" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Rented" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={5}>
                                            <Form.Group className="mb-2" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Lived with Parents" />
                                            </Form.Group>
                                        </Col>
                                    </Row><br />
                                    <p className="font">Type of House</p>
                                    <Row>
                                        <Col xs={4}>
                                            <Form.Group className="mb-2" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Light Material" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={4}>
                                            <Form.Group className="mb-2" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Semi Concrete" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={3}>
                                            <Form.Group className="mb-2" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Concrete" />
                                            </Form.Group>
                                        </Col>
                                    </Row><br />
                                    <p className="font">Health Concerns</p>
                                    <FloatingLabel controlId="floatingPassword" label="Type of Illness" className="mb-2">
                                        <Form.Control type="text" placeholder="Type of Illness" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="How long" className="mb-2">
                                        <Form.Control type="text" placeholder="How long" />
                                    </FloatingLabel><br /><br />
                                    <Container className="d-flex justify-content-end">
                                        <Button className='w-50 fw-bold login-btn' variant="primary" onClick={() => alert('Saving...')}>
                                            Save
                                        </Button>
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card><br />
                </Container>
            </Container>
        </>
    );
}

export default IPForm;