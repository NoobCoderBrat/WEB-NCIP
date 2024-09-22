import { useState } from "react";
import "./App.css";
import { Container, Table, Form, Button, Row, Col } from "react-bootstrap";
import { FaTrash, FaCheckCircle } from "react-icons/fa";
import NavBar from "./Navbar.js";

function RequestAccess() {
  const [accessGranted, setAccessGranted] = useState({});

  const handleGrantAccess = (index) => {
    setAccessGranted((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  const employees = [
    {
      name: "Marion Jotohot",
      role: "Office Clerk",
      imgSrc: "https://via.placeholder.com/50",
    },
    {
      name: "Marc Gerasmio",
      role: "Regular Employee",
      imgSrc: "https://via.placeholder.com/50",
    },
    {
      name: "John Elro Karl Estoque",
      role: "Admin",
      imgSrc: "https://via.placeholder.com/50",
    },
  ];

  return (
    <>
      <Container fluid>
        <NavBar />
        <Container className="mt-4 text">
          <Form.Group as={Row} controlId="formPlaintextEmail" className="mb-3 search-group">
            <Form.Label column sm="12" md="2">Search Employee:</Form.Label>
            <Col sm="12" md="10">
              <Form.Control
                type="search"
                className="shadow w-25"
                aria-label="Search"
              />
            </Col>
          </Form.Group>
          <div className="table-responsive">
            <Table bordered className="shadow">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={employee.imgSrc}
                        alt=""
                        width="60"
                        height="60"
                      />
                    </td>
                    <td>{employee.name}</td>
                    <td>{employee.role}</td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <Button
                          variant={accessGranted[index] ? "secondary" : "success"}
                          className="action-button me-2 mb-2 mb-md-0"
                          disabled={accessGranted[index]}
                          onClick={() => handleGrantAccess(index)}
                        >
                          <FaCheckCircle className="icon me-1" />
                          {accessGranted[index] ? "Granted" : "Grant"}
                        </Button>
                        <Button variant="danger" className="action-button">
                          <FaTrash className="icon" /> Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default RequestAccess;
