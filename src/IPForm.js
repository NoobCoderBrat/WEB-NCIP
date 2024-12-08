import React, { useState } from "react";
import "./App.css";
import NavBar from "./Navbar.js";
import { Container, Form, Row, Col, FloatingLabel, Card, Button } from "react-bootstrap";
import supabase from "./config/supabaseClient.js";

function IPForm() {
  const [category, setCategory] = useState('');
  const [formData, setFormData] = useState({
    cadt: '',
    ip_group: '',
    recognized_leader: '',
    name: '',
    age: '',
    birthdate: '',
    birthplace: '',
    address: '',
    gender: '',
    available_documents: [],
    grade_level: '',
    school: '',
    eap_scholar: '',
    house: '',
    type_of_house: '',
    type_of_illness: '',
    duration: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleCheckboxChange = (e, groupName) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const group = prevData[groupName];
      return {
        ...prevData,
        [groupName]: checked
          ? [...group, value] 
          : group.filter((item) => item !== value), 
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
            birth_date: formData.birthdate, 
            birth_place: formData.birthplace, 
            address: formData.address,
            available_documents: formData.available_documents,
            grade_level: formData.grade_level,
            school: formData.school,     
            eap_scholar: formData.eap_scholar,
            house: formData.house,
            type_of_house: formData.type_of_house,
            type_of_illness: formData.type_of_illness,
            how_long: formData.duration,
            category,
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
          <Form onSubmit={handleSubmit}>
      <Card className="p-3 shadow mb-5">
        <Card.Body className="text">
          <Row>
            <Col xs={12} md={6} className="mb-3">
            <FloatingLabel controlId="floatingCADT" label="IP Status" className="mb-2">
                <Form.Select
                  name=""
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select IP STATUS</option>
                  <option value="IP">IP</option>
                  <option value="NON-IP">NON-IP</option>
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingCADT" label="CADT" className="mb-2">
                <Form.Select
                  name="cadt"
                  value={formData.cadt}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select CADT</option>
                  <option value="CADT 118">CADT 118</option>
                  <option value="CADT 135">CADT 135</option>
                  <option value="CADT 252">CADT 252</option>
                </Form.Select>
              </FloatingLabel>

              <FloatingLabel controlId="floatingIPGroup" label="IP Group" className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="IP Group"
                  name="ip_group"
                  value={formData.ip_group}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingLeader" label="Recognized Leader" className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="Recognized Leader"
                  name="recognized_leader"
                  value={formData.recognized_leader}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingName" label="Name" className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingAge" label="Age" className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="Age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingBirthdate" label="Birthdate" className="mb-2">
                <Form.Control
                  type="date"
                  placeholder="Birthdate"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingBirthplace" label="Birthplace" className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="Birthplace"
                  name="birthplace"
                  value={formData.birthplace}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingAddress" label="Address" className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingCADT" label="Gender" className="mb-2">
                <Form.Select
                  name="cadt"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="LGBT">LGBT</option>
                </Form.Select>
              </FloatingLabel>
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
                      required={formData.available_documents.length === 0} // Ensures at least one checkbox is selected
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
                  required
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingSchool" label="School" className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="School"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  required
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
                      required
                    />
                  </Col>
                ))}
              </Row>

              <p className="font">House</p>
              <Row>
                {["Owned", "Rented", "Living with Parents"].map((status) => (
                  <Col key={status} xs={4} sm={3}>
                    <Form.Check
                      type="radio"
                      label={status}
                      name="house"
                      value={status}
                      checked={formData.house === status}
                      onChange={handleChange}
                      required
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
                      required
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
                  required
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingDuration" label="How long" className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="How long"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>

              <Container className="d-flex justify-content-center mt-5">
                <Button className="w-50 fw-bold login-btn" variant="primary" type="submit">
                  Save
                </Button>
              </Container>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Form>

      </Container>
    </Container>
  );
}

export default IPForm;
