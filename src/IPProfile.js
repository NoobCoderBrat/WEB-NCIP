import React, { useState } from "react";
import {
  Container,
  Table,
  Card,
  DropdownButton,
  Dropdown,
  FloatingLabel,
  Form,
  Row,
  Col,
  Button,
  Modal,
} from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import NavBar from "./Navbar.js";
import supabase from "./config/supabaseClient";
import { useEffect } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import Footer from "./Footer.js";

const IPProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const [formData, setFormData] = useState({});
  const [userdata, setUserData] = useState([]);
  const [selectedDocs, setSelectedDocs] = useState([]);
  const [cadt, setCadt] = useState("");
  const [illness, setIllness] = useState("");
  const [age, setAge] = useState("");
  const [house, setHouse] = useState("");
  const [college, setCollege] = useState("");
  const [highschool, setHighSchool] = useState("");
  const [eap, setEap] = useState("");
  const [youth, setYouth] = useState("");
  const [cadt118, setCadt118] = useState("");
  const [cadt135, setCadt135] = useState("");
  const [cadt252, setCadt252] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

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

  const update_data = async () => {
    //         const availableDocumentsString = formData.available_documents; // Your available_documents string

    // // Parse the string into an array (if it's in string format)
    // let availableDocuments;
    // try {
    //   availableDocuments = JSON.parse(availableDocumentsString);
    // } catch (error) {
    //   // Handle parsing error, in case the string isn't valid JSON
    //   console.error('Error parsing available_documents:', error);
    //   availableDocuments = []; // Fallback to an empty array
    // }

    // // Concatenate and remove duplicates
    // const combinedDocs = Array.from(new Set([...selectedDocs, ...availableDocuments]));

    // console.log(combinedDocs);
    try {
      const { data } = await supabase
        .from("census_data")
        .update([
          {
            cadt: formData.cadt,
            ip_group: formData.ip_group,
            recognized_leader: formData.recognized_leader,
            name: formData.name,
            age: formData.age,
            gender: formData.gender,
            birth_date: formData.birth_date,
            birth_place: formData.birth_place,
            address: formData.address,
            available_documents: selectedDocs,
            grade_level: formData.grade_level,
            school: formData.school,
            eap_scholar: formData.eap_scholar,
            house: formData.house,
            type_of_house: formData.type_of_house,
            type_of_illness: formData.type_of_illness,
            how_long: formData.how_long,
          },
        ])
        .eq("id", formData.id);
      alert("Update Data Success!");
      setShowModal(false);
      fetch_data();
    } catch (error) {
      alert("Error Saving Data.");
    }
  };

  const deleteData = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (!confirmDelete) return;

    try {
      const { error } = await supabase
        .from("census_data")
        .delete()
        .eq("id", id);

      if (error) {
        throw error;
      }

      alert("Record deleted successfully!");
      fetch_data(); // Refresh the data after deletion
    } catch (error) {
      alert("Error deleting data.");
      console.error("Delete error: ", error.message);
    }
  };

  const fetch_data = async () => {
    try {
      const { error, data } = await supabase
        .from("census_data")
        .select("*")
        .order("created_at", { ascending: false });
      console.log(data);
      setUserData(data);
    } catch (error) {
      alert("An unexpected error occurred.");
      console.error("Error during registration:", error.message);
    }
  };
  const handleDocsCheckbox = (value) => {
    setSelectedDocs((prevSelectedDocs) => {
      if (prevSelectedDocs.includes(value)) {
        return prevSelectedDocs.filter((doc) => doc !== value);
      } else {
        return [...prevSelectedDocs, value];
      }
    });
  };
  useEffect(() => {
    fetch_data();
  }, []);

  const filteredData = userdata.filter(
    (data) =>
      (!cadt118 || data.cadt === "CADT 118") &&
      (!cadt135 || data.cadt === "CADT 135") &&
      (!cadt252 || data.cadt === "CADT 252") &&
      (!illness || data.type_of_illness !== "N/A") &&
      (!age || parseInt(data.age) >= 75) &&
      (!house || data.house !== "Owned") &&
      (!college ||
        (data.grade_level === "College" && data.eap_scholar === "No")) &&
      (!highschool ||
        (data.grade_level == "High School" && data.eap_scholar == "No")) &&
      (!eap || data.eap_scholar == "Yes") &&
      (!youth ||
        (parseInt(data.age) >= 15 &&
          parseInt(data.age) <= 24 &&
          data.school == "N/A")) &&
      (data.name && searchTerm
        ? data.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true)
  );

  const generatePdf = (data) => {
    const doc = new jsPDF({ orientation: "landscape", format: "legal" });

    const tableColumn = [
      "CADT",
      "IP GROUP",
      "RECOGNIZED LEADER",
      "NAME",
      "AGE",
      "GENDER",
      "BIRTHDATE",
      "BIRTHPLACE",
      "ADDRESS",
      "AVAILABLE DOCUMENTS",
      "Grade Level",
      "School",
      "EAP Scholar",
      "Type of Illness",
      "How Long",
      "House",
      "Type of House",
    ];

    // Prepare the table rows from the data
    const tableRows = data.map((item) => [
      item.cadt,
      item.ip_group,
      item.recognized_leader,
      item.name,
      item.age,
      item.gender,
      item.birth_date,
      item.birth_place,
      item.address,
      item.available_documents,
      item.grade_level,
      item.school,
      item.eap_scholar,
      item.type_of_illness,
      item.how_long,
      item.house,
      item.type_of_house,
    ]);

    // Add the table to the PDF
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    // Save the PDF
    doc.save("table.pdf");
  };

  const exportToExcel = (data) => {
    // Create a new worksheet
    const worksheet = XLSX.utils.json_to_sheet(filteredData);

    // Create a new workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

    // Export the file
    XLSX.writeFile(workbook, "table_data.xlsx");
  };
  return (
    <>
      <Container fluid>
        <NavBar />
        <Container fluid className="mt-4 mb-5 text">
          <Container fluid>
            <Form.Group
              as={Row}
              controlId="formPlaintextEmail"
              className="align-items-center"
            >
              <Form.Label column sm="1">
                Show Only:
              </Form.Label>
              <Col sm="10">
                <div className="d-flex align-items-center">
                  <div className="shadow">
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Select Option"
                      className="w-100"
                      variant="outline-secondary"
                    >
                      <Dropdown.Item
                        as="button"
                        onClick={() => setIllness(!illness)}
                      >
                        {"IP with Illness"}
                      </Dropdown.Item>
                      <Dropdown.Item as="button" onClick={() => setAge(!age)}>
                        {"Senior Citizen"}
                      </Dropdown.Item>
                      <Dropdown.Item
                        as="button"
                        onClick={() => setHouse(!house)}
                      >
                        {"Household with no own house"}
                      </Dropdown.Item>
                      <Dropdown.Item
                        as="button"
                        onClick={() => setHighSchool(!highschool)}
                      >
                        {"High School Students with no Scholarship"}
                      </Dropdown.Item>
                      <Dropdown.Item
                        as="button"
                        onClick={() => setCollege(!college)}
                      >
                        {"College Students with no Scholarship"}
                      </Dropdown.Item>
                      <Dropdown.Item as="button" onClick={() => setEap(!eap)}>
                        {"EAP Grantees"}
                      </Dropdown.Item>
                      <Dropdown.Item
                        as="button"
                        onClick={() => setYouth(!youth)}
                      >
                        {"Out of School Youth"}
                      </Dropdown.Item>
                      <Dropdown drop="right">
                        <Dropdown.Toggle
                          variant="link"
                          className="dropdown-item"
                        >
                          CADT
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => setCadt118(!cadt118)}>
                            CADT 118
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => setCadt135(!cadt135)}>
                            CADT 135
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => setCadt252(!cadt252)}>
                            CADT 252
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </DropdownButton>
                  </div>

                  <DropdownButton
                    id="dropdown-custom-components"
                    title="Export"
                    className="font ms-3 shadow"
                    variant="outline-secondary"
                  >
                    <Dropdown.Item onClick={() => exportToExcel(filteredData)}>
                      Export as Excel File
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => generatePdf(filteredData)}>
                      Export as PDF
                    </Dropdown.Item>
                  </DropdownButton>

                  <Form.Control
                    type="search"
                    className="shadow ms-3 w-25"
                    placeholder="Search by Name"
                    aria-label="Search"
                    value={searchTerm} // Bind search term to input
                    onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
                  />
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
                    <th rowSpan={2} className="background">
                      CADT
                    </th>
                    <th rowSpan={2} className="background">
                      IP GROUP
                    </th>
                    <th rowSpan={2} className="background">
                      RECOGNIZED LEADER
                    </th>
                    <th rowSpan={2} className="background">
                      NAME
                    </th>
                    <th rowSpan={2} className="background">
                      AGE
                    </th>
                    <th rowSpan={2} className="background">
                      GENDER
                    </th>
                    <th rowSpan={2} className="background">
                      BIRTHDATE
                    </th>
                    <th rowSpan={2} className="background">
                      BIRTHPLACE
                    </th>
                    <th rowSpan={2} className="background">
                      ADDRESS
                    </th>
                    <th rowSpan={2} className="background">
                      AVAILABLE DOCUMENTS
                    </th>
                    <th colSpan={3} className="text-center background">
                      EDUCATION
                    </th>
                    <th colSpan={2} className="text-center background">
                      HEALTH CONCERN
                    </th>
                    <th rowSpan={2} className="background">
                      HOUSE
                    </th>
                    <th rowSpan={2} className="background">
                      TYPE OF HOUSE
                    </th>
                    <th rowSpan={2} className="background">
                      ACTIONS
                    </th>
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
                  {filteredData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.cadt}</td>
                      <td>{data.ip_group}</td>
                      <td>{data.recognized_leader}</td>
                      <td>{data.name}</td>
                      <td>{data.age}</td>
                      <td>{data.gender}</td>
                      <td>{data.birth_date}</td>
                      <td>{data.birth_place}</td>
                      <td>{data.address}</td>
                      <td>{data.available_documents}</td>
                      <td>{data.grade_level}</td>
                      <td>{data.school}</td>
                      <td>{data.eap_scholar}</td>
                      <td>{data.type_of_illness}</td>
                      <td>{data.how_long}</td>
                      <td>{data.house}</td>
                      <td>{data.type_of_house}</td>
                      <td className="actions-cell mt-3">
                        <Button
                          variant="primary"
                          className="action-button edit-btn"
                          onClick={() => handleShow(data)}
                        >
                          <FaEdit className="icon" />
                        </Button>
                        <Button
                          variant="danger"
                          className="action-button"
                          onClick={() => deleteData(data.id)}
                        >
                          <FaTrash className="icon" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card>
        </Container>
        <Footer />
      </Container>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="font fw-bold">Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="font">
            <Row>
              <Col md={4}>
                <FloatingLabel
                  controlId="floatingCadt"
                  label="CADT"
                  className="mb-3"
                >
                  <Form.Control
                    as="select"
                    name="cadt"
                    value={formData.cadt || ""}
                    onChange={handleChange}
                  >
                    <option>CADT 118</option>
                    <option>CADT 135</option>
                    <option>CADT 252</option>
                  </Form.Control>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingIpGroup"
                  label="IP Group"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="ip_group"
                    value={formData.ip_group || ""}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingRecognizedLeader"
                  label="Recognized Leader"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="recognizedLeader"
                    value={formData.recognized_leader || ""}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingName"
                  label="Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name || ""}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingAge"
                  label="Age"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="age"
                    value={formData.age || ""}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextGender"
                >
                  <Form.Label column sm="4">
                    Gender
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      as="select"
                      name="gender"
                      value={formData.gender || ""}
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
                <FloatingLabel
                  controlId="floatingBirthdate"
                  label="Birthdate"
                  className="mb-3"
                >
                  <Form.Control
                    type="date"
                    name="birthdate"
                    value={formData.birth_date || ""}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingBirthplace"
                  label="Birthplace"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="birth_place"
                    value={formData.birth_place || ""}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingAddress"
                  label="Address"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address || ""}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <Form.Label column sm="4">
                  Available Documents
                </Form.Label>
                <Row>
                  <Col xs={6}>
                    <Form.Group className="mb-2">
                      <Form.Check
                        type="checkbox"
                        label="Marriage Certificate"
                        onChange={() =>
                          handleDocsCheckbox("Marriage Certificate")
                        }
                        checked={
                          selectedDocs.includes("Marriage Certificate") || false
                        }
                      />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Check
                        type="checkbox"
                        label="PhilHealth"
                        onChange={() => handleDocsCheckbox("PhilHealth")}
                        checked={selectedDocs.includes("PhilHealth") || false}
                      />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Check
                        type="checkbox"
                        label="Birth Certificate"
                        onChange={() => handleDocsCheckbox("Birth Certificate")}
                        checked={
                          selectedDocs.includes("Birth Certificate") || false
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group className="mb-2">
                      <Form.Check
                        type="checkbox"
                        label="DSWD 4P's"
                        onChange={() => handleDocsCheckbox("DSWD 4P's")}
                        checked={selectedDocs.includes("DSWD 4P's") || false}
                      />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Check
                        type="checkbox"
                        label="Pension"
                        onChange={() => handleDocsCheckbox("Pension")}
                        checked={selectedDocs.includes("Pension") || false}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col md={4}>
                <FloatingLabel
                  controlId="floatingGradeLevel"
                  label="Grade Level"
                  className="mb-3"
                >
                  <Form.Control
                    as="select"
                    name="grade_level"
                    value={formData.grade_level || ""}
                    onChange={handleChange}
                  >
                    <option>College</option>
                    <option>High School</option>
                    <option>Elementary</option>
                    <option>N/A</option>
                  </Form.Control>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingSchool"
                  label="School"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="school"
                    value={formData.school || ""}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextGender"
                >
                  <Form.Label column sm="4">
                    EAP Scholar
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      as="select"
                      name="eap_scholar"
                      value={formData.eap_scholar || ""}
                      onChange={handleChange}
                    >
                      <option>No</option>
                      <option>Yes</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
                <FloatingLabel
                  controlId="floatingTypeOfIllness"
                  label="Type of Illness"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="type_of_illness"
                    value={formData.type_of_illness || ""}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingHowLong"
                  label="How Long"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="how_long"
                    value={formData.how_long || ""}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextGender"
                >
                  <Form.Label column sm="4">
                    House
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      as="select"
                      name="house"
                      value={formData.house || ""}
                      onChange={handleChange}
                    >
                      <option>Owned</option>
                      <option>Rented</option>
                      <option>Lived with Parents</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextGender"
                >
                  <Form.Label column sm="4">
                    Type of House
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      as="select"
                      name="type_of_house"
                      value={formData.type_of_house || ""}
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
        <Modal.Footer className="d-flex justify-content-center">
          <Button
            variant="primary"
            className="login-btn fw-bold w-md-50"
            onClick={update_data}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default IPProfile;
