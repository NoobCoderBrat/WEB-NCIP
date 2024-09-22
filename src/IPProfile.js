import React, { useState } from 'react';
import { Container, Table, Card, DropdownButton, Dropdown, FloatingLabel, Form, Row, Col, Button, Modal } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import NavBar from './Navbar.js';

const IPProfile = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentData, setCurrentData] = useState({});
    const [formData, setFormData] = useState({});

    const handleShow = (data) => {
        setFormData(data);
        setCurrentData(data);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        console.log('Updated Data:', formData);
        setShowModal(false);
    };

    // Sample data
    const sampleData = {
        cadt: 'CADT 101',
        ipGroup: 'Manobo',
        recognizedLeader: 'Marc Gerasmio',
        name: 'Marion Jotohot',
        age: '23',
        gender: 'Male',
        birthdate: '06/30/2001',
        birthplace: 'Butuan City',
        address: 'Lumbocan',
        availableDocuments: 'Birth Certificate',
        education: {
            gradeLevel: 'Grade 10',
            school: 'Lumbocan NHS',
            eapScholar: 'No',
        },
        healthConcern: {
            typeOfIllness: 'Fever',
            howLong: '23 years',
        },
        house: 'Concrete',
        typeOfHouse: 'Detached',
    };

    return (
        <>
            <Container fluid>
                <NavBar />
                <Container fluid className="mt-4 mb-5 text">
                    <Container fluid>
                        <Form.Group as={Row} controlId="formPlaintextEmail" className="align-items-center">
                            <Form.Label column sm="1">Show Only:</Form.Label>
                            <Col sm="10">
                                <div className="d-flex">
                                    <Form.Select aria-label="Default select example" className='w-50 shadow'>
                                        <option></option>
                                        <option>CADT 118</option>
                                        <option>CADT 135</option>
                                        <option>CADT 252</option>
                                        <option value="1">IP with Illness</option>
                                        <option value="2">Senior Citizen</option>
                                        <option value="3">Household with no own house</option>
                                        <option value="4">EAP Grantees</option>
                                        <option value="5">Families with EAP grants</option>
                                        <option value="6">High School Students with no Scholarship</option>
                                        <option value="7">College Students with no Scholarship</option>
                                        <option value="8">Out of School Youth</option>
                                    </Form.Select>
                                    <DropdownButton
                                        id="dropdown-custom-components"
                                        title="Export"
                                        className="font ms-3 shadow"
                                        variant="outline-secondary"
                                    >
                                        <Dropdown.Item eventKey="1">Export as file</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Export as PDF</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </Col>
                        </Form.Group>
                        <br />
                    </Container>
                    <Card className="shadow text">
                        <div className="table-responsive">
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th rowSpan={2} className="background">#</th>
                                        <th rowSpan={2} className="background">CADT</th>
                                        <th rowSpan={2} className="background">IP GROUP</th>
                                        <th rowSpan={2} className="background">RECOGNIZED LEADER</th>
                                        <th rowSpan={2} className="background">NAME</th>
                                        <th rowSpan={2} className="background">AGE</th>
                                        <th rowSpan={2} className="background">GENDER</th>
                                        <th rowSpan={2} className="background">BIRTHDATE</th>
                                        <th rowSpan={2} className="background">BIRTHPLACE</th>
                                        <th rowSpan={2} className="background">ADDRESS</th>
                                        <th rowSpan={2} className="background">AVAILABLE DOCUMENTS</th>
                                        <th colSpan={3} className="text-center background">EDUCATION</th>
                                        <th colSpan={2} className="text-center background">HEALTH CONCERN</th>
                                        <th rowSpan={2} className="background">HOUSE</th>
                                        <th rowSpan={2} className="background">TYPE OF HOUSE</th>
                                        <th rowSpan={2} className="background">ACTIONS</th>
                                    </tr>
                                    <tr>
                                        <th className="background">Grade Level</th>
                                        <th className="background">School</th>
                                        <th className="background">EAP Scholar</th>
                                        <th className="background">Type of Illness</th>
                                        <th className="background">How Long</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>{sampleData.cadt}</td>
                                        <td>{sampleData.ipGroup}</td>
                                        <td>{sampleData.recognizedLeader}</td>
                                        <td>{sampleData.name}</td>
                                        <td>{sampleData.age}</td>
                                        <td>{sampleData.gender}</td>
                                        <td>{sampleData.birthdate}</td>
                                        <td>{sampleData.birthplace}</td>
                                        <td>{sampleData.address}</td>
                                        <td>{sampleData.availableDocuments}</td>
                                        <td>{sampleData.education.gradeLevel}</td>
                                        <td>{sampleData.education.school}</td>
                                        <td>{sampleData.education.eapScholar}</td>
                                        <td>{sampleData.healthConcern.typeOfIllness}</td>
                                        <td>{sampleData.healthConcern.howLong}</td>
                                        <td>{sampleData.house}</td>
                                        <td>{sampleData.typeOfHouse}</td>
                                        <td className="actions-cell mt-3">
                                            <Button
                                                variant="primary"
                                                className="action-button edit-btn"
                                                onClick={() => handleShow(sampleData)}
                                            >
                                                <FaEdit className="icon" />
                                            </Button>
                                            <Button variant="danger" className="action-button">
                                                <FaTrash className="icon" />
                                            </Button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>{sampleData.cadt}</td>
                                        <td>{sampleData.ipGroup}</td>
                                        <td>{sampleData.recognizedLeader}</td>
                                        <td>{sampleData.name}</td>
                                        <td>{sampleData.age}</td>
                                        <td>{sampleData.gender}</td>
                                        <td>{sampleData.birthdate}</td>
                                        <td>{sampleData.birthplace}</td>
                                        <td>{sampleData.address}</td>
                                        <td>{sampleData.availableDocuments}</td>
                                        <td>{sampleData.education.gradeLevel}</td>
                                        <td>{sampleData.education.school}</td>
                                        <td>{sampleData.education.eapScholar}</td>
                                        <td>{sampleData.healthConcern.typeOfIllness}</td>
                                        <td>{sampleData.healthConcern.howLong}</td>
                                        <td>{sampleData.house}</td>
                                        <td>{sampleData.typeOfHouse}</td>
                                        <td className="actions-cell mt-3">
                                            <Button
                                                variant="primary"
                                                className="action-button edit-btn"
                                                onClick={() => handleShow(sampleData)}
                                            >
                                                <FaEdit className="icon" />
                                            </Button>
                                            <Button variant="danger" className="action-button">
                                                <FaTrash className="icon" />
                                            </Button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>{sampleData.cadt}</td>
                                        <td>{sampleData.ipGroup}</td>
                                        <td>{sampleData.recognizedLeader}</td>
                                        <td>{sampleData.name}</td>
                                        <td>{sampleData.age}</td>
                                        <td>{sampleData.gender}</td>
                                        <td>{sampleData.birthdate}</td>
                                        <td>{sampleData.birthplace}</td>
                                        <td>{sampleData.address}</td>
                                        <td>{sampleData.availableDocuments}</td>
                                        <td>{sampleData.education.gradeLevel}</td>
                                        <td>{sampleData.education.school}</td>
                                        <td>{sampleData.education.eapScholar}</td>
                                        <td>{sampleData.healthConcern.typeOfIllness}</td>
                                        <td>{sampleData.healthConcern.howLong}</td>
                                        <td>{sampleData.house}</td>
                                        <td>{sampleData.typeOfHouse}</td>
                                        <td className="actions-cell mt-3">
                                            <Button
                                                variant="primary"
                                                className="action-button edit-btn"
                                                onClick={() => handleShow(sampleData)}
                                            >
                                                <FaEdit className="icon" />
                                            </Button>
                                            <Button variant="danger" className="action-button">
                                                <FaTrash className="icon" />
                                            </Button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>4</td>
                                        <td>{sampleData.cadt}</td>
                                        <td>{sampleData.ipGroup}</td>
                                        <td>{sampleData.recognizedLeader}</td>
                                        <td>{sampleData.name}</td>
                                        <td>{sampleData.age}</td>
                                        <td>{sampleData.gender}</td>
                                        <td>{sampleData.birthdate}</td>
                                        <td>{sampleData.birthplace}</td>
                                        <td>{sampleData.address}</td>
                                        <td>{sampleData.availableDocuments}</td>
                                        <td>{sampleData.education.gradeLevel}</td>
                                        <td>{sampleData.education.school}</td>
                                        <td>{sampleData.education.eapScholar}</td>
                                        <td>{sampleData.healthConcern.typeOfIllness}</td>
                                        <td>{sampleData.healthConcern.howLong}</td>
                                        <td>{sampleData.house}</td>
                                        <td>{sampleData.typeOfHouse}</td>
                                        <td className="actions-cell mt-3">
                                            <Button
                                                variant="primary"
                                                className="action-button edit-btn"
                                                onClick={() => handleShow(sampleData)}
                                            >
                                                <FaEdit className="icon" />
                                            </Button>
                                            <Button variant="danger" className="action-button">
                                                <FaTrash className="icon" />
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Card>
                </Container>
            </Container>

            <Modal show={showModal} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title className="font fw-bold">Edit Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='font'>
                        <Row>
                            <Col md={4}>
                                <FloatingLabel controlId="floatingCadt" label="CADT" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="cadt"
                                        value={formData.cadt || ''}
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingIpGroup" label="IP Group" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="ipGroup"
                                        value={formData.ipGroup || ''}
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingRecognizedLeader" label="Recognized Leader" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="recognizedLeader"
                                        value={formData.recognizedLeader || ''}
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name || ''}
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingAge" label="Age" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="age"
                                        value={formData.age || ''}
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextGender">
                                    <Form.Label column sm="4">Gender</Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            as="select"
                                            name="gender"
                                            value={formData.gender || ''}
                                            onChange={handleChange}
                                        >
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <FloatingLabel controlId="floatingBirthdate" label="Birthdate" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="birthdate"
                                        value={formData.birthdate || ''}
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingBirthplace" label="Birthplace" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="birthplace"
                                        value={formData.birthplace || ''}
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingAddress" label="Address" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        value={formData.address || ''}
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextGender">
                                    <Form.Label column sm="4">Available Documents</Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            as="select"
                                            name="availableDocuments"
                                            alue={formData.availableDocuments || ''}
                                            onChange={handleChange}
                                        >
                                            <option>Marriage Certificate</option>
                                            <option>PhilHealth</option>
                                            <option>Birth Certificate</option>
                                            <option>DSWD 4P's</option>
                                            <option>Pension</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <FloatingLabel controlId="floatingGradeLevel" label="Grade Level" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="education.gradeLevel"
                                        value={formData.education?.gradeLevel || ''}
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingSchool" label="School" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="education.school"
                                        value={formData.education?.school || ''}
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col md={4}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextGender">
                                    <Form.Label column sm="4">EAP Scholar</Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            as="select"
                                            name="gender"
                                            value={formData.education?.eapScholar || ''}
                                            onChange={handleChange}
                                        >
                                            <option>Yes</option>
                                            <option>No</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <FloatingLabel controlId="floatingTypeOfIllness" label="Type of Illness" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="healthConcern.typeOfIllness"
                                        value={formData.healthConcern?.typeOfIllness || ''}
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingHowLong" label="How Long" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="healthConcern.howLong"
                                        value={formData.healthConcern?.howLong || ''}
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextGender">
                                    <Form.Label column sm="4">House</Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            as="select"
                                            name="house"
                                            value={formData.house || ''}
                                            onChange={handleChange}
                                        >
                                            <option>Owned</option>
                                            <option>Rented</option>
                                            <option>Lived with Parents</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextGender">
                                    <Form.Label column sm="4">Type of House</Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            as="select"
                                            name="typeOfHouse"
                                            value={formData.typeOfHouse || ''}
                                            onChange={handleChange}
                                        >
                                            <option>Light Material</option>
                                            <option>Semi-Concrete</option>
                                            <option>Concrete</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center'>
                    <Button variant="primary" className='login-btn fw-bold w-md-50' onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default IPProfile;
