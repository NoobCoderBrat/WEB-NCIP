import React, { useState } from "react";
import "./App.css";
import NavBar from "./Navbar.js";
import { Container, Form, Row, Col, FloatingLabel, Card, Button } from "react-bootstrap";
import supabase from "./config/supabaseClient.js";

function IPForm() {
  // Create a single state object to store the entire form data
  const [formData, setFormData] = useState({
    cadt: '',
    ip_group: '',
    recognized_leader: '',
    name: '',
    age: '',
    birthdate: '',
    birthplace: '',
    address: '',
    gender: [],
    available_documents: [],
    grade_level: '',
    school: '',
    eap_scholar: '',
    house: '',
    type_of_house: '',
    type_of_illness: '',
    duration: ''
  });

  // General handle change function for text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle checkbox changes (for multiple selections like gender or available documents)
  const handleCheckboxChange = (e, groupName) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const group = prevData[groupName];
      return {
        ...prevData,
        [groupName]: checked
          ? [...group, value] // Add if checked
          : group.filter((item) => item !== value), // Remove if unchecked
      };
    });
  };

  const handleSubmit = async () => {
    try {
      const { data, error } = await supabase
        .from('census_data')
        .insert([
          {
            cadt: formData.cadt,
            ip_group: formData.ip_group,
            recognized_leader: formData.recognized_leader,
            name: formData.name,
            age: formData.age,
            gender: formData.gender,
            birth_date: formData.birthdate,  // Ensure form field names match your formData
            birth_place: formData.birthplace, // Add this to your form if missing
            address: formData.address,
            available_documents: formData.available_documents,
            grade_level: formData.grade_level,
            school: formData.school,          // Add this to your form if missing
            eap_scholar: formData.eap_scholar,
            house: formData.house,
            type_of_house: formData.type_of_house,
            type_of_illness: formData.type_of_illness,
            how_long: formData.duration,
          }
        ]);
  
      if (error) {
        throw error;
      }
  
      alert("Data Saved Successfully!");
      window.location.reload();
    } catch (error) {
      alert("Error Saving Data: " + error.message);
    }
  };
  

  return (
    <Container fluid>
      <NavBar />
      <Container className="mt-3">
        <Card className="p-3 shadow mb-5">
          <Card.Body className="text">
            <Row>
              <Col xs={12} md={6} className="mb-3">
                <FloatingLabel controlId="floatingCADT" label="CADT" className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="CADT"
                    name="cadt"
                    value={formData.cadt}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingIPGroup" label="IP Group" className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="IP Group"
                    name="ip_group"
                    value={formData.ip_group}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingLeader" label="Recognized Leader" className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="Recognized Leader"
                    name="recognized_leader"
                    value={formData.recognized_leader}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingName" label="Name" className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingAge" label="Age" className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="Age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingBirthdate" label="Birthdate" className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="Birthdate"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingBirthdate" label="Birthplace" className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="Birthplace"
                    name="birthplace"
                    value={formData.birthplace}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingAddress" label="Address" className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </FloatingLabel>

                <p className="font">Gender</p>
                <Row className="mb-3">
                  {["Male", "Female", "LGBTQ"].map((gender) => (
                    <Col key={gender} xs={4} sm={3} md={2}>
                      <Form.Check
                        type="checkbox"
                        label={gender}
                        value={gender}
                        checked={formData.gender.includes(gender)}
                        onChange={(e) => handleCheckboxChange(e, "gender")}
                      />
                    </Col>
                  ))}
                </Row>

                <p className="font">Available Documents</p>
                <Row>
                  {["Marriage Certificate", "PhilHealth", "Birth Certificate", "DSWD 4P's", "Pension"].map((doc) => (
                    <Col key={doc} xs={6} sm={4} md={5}>
                      <Form.Check
                        type="checkbox"
                        label={doc}
                        value={doc}
                        checked={formData.available_documents.includes(doc)}
                        onChange={(e) => handleCheckboxChange(e, "available_documents")}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>

              <Col xs={12} md={6}>
                <p className="font">Education</p>
                <FloatingLabel controlId="floatingGradeLevel" label="Grade Level" className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="Grade Level"
                    name="grade_level"
                    value={formData.grade_level}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingGradeLevel" label="School" className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="School"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                  />
                </FloatingLabel>

                <p className="font">EAP Scholar</p>
                <Row>
                  {["Yes", "No"].map((answer) => (
                    <Col key={answer} xs={4} sm={3}>
                      <Form.Check
                        type="radio"
                        label={answer}
                        name="eap_scholar"
                        value={answer}
                        checked={formData.eap_scholar === answer}
                        onChange={handleChange}
                      />
                    </Col>
                  ))}
                </Row>

                <p className="font">House</p>
                <Row>
                  {["Owned", "Rented", "Lived with Parents"].map((status) => (
                    <Col key={status} xs={4} sm={3}>
                      <Form.Check
                        type="radio"
                        label={status}
                        name="house"
                        value={status}
                        checked={formData.house === status}
                        onChange={handleChange}
                      />
                    </Col>
                  ))}
                </Row>

                <p className="font">Type of House</p>
                <Row>
                  {["Light Material", "Semi Concrete", "Concrete"].map((type) => (
                    <Col key={type} xs={4}>
                      <Form.Check
                        type="radio"
                        label={type}
                        name="type_of_house"
                        value={type}
                        checked={formData.type_of_house === type}
                        onChange={handleChange}
                      />
                    </Col>
                  ))}
                </Row>

                <p className="font">Health Concerns</p>
                <FloatingLabel controlId="floatingIllness" label="Type of Illness" className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="Type of Illness"
                    name="type_of_illness"
                    value={formData.type_of_illness}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingDuration" label="How long" className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="How long"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                  />
                </FloatingLabel>

                <Container className="d-flex justify-content-center mt-5">
                  <Button className="w-50 fw-bold login-btn" variant="primary" onClick={handleSubmit}>
                    Save
                  </Button>
                </Container>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default IPForm;
