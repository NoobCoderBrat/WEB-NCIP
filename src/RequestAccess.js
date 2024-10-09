import { useState, useEffect } from "react";
import "./App.css";
import { Container, Table, Form, Button, Row, Col } from "react-bootstrap";
import { FaTrash, FaCheckCircle } from "react-icons/fa";
import NavBar from "./Navbar.js";
import supabase from "./config/supabaseClient.js";

function RequestAccess() {
  const [accessGranted, setAccessGranted] = useState({});
  const [employees, setEmployee] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Added state for search term

  const handleGrantAccess = async (idnumber) => {
    try {
      const { error, data } = await supabase
        .from("users")
        .update([{ is_verified: "true" }])
        .eq("idnumber", idnumber);

      alert("Access Granted");
      window.location.reload();
    } catch (error) {
      alert("An unexpected error occurred.");
      console.error("Error during registration:", error.message);
    }
  };

  const remove = async (idnumber) => {
    try {
      const { error, data } = await supabase
        .from('users')
        .delete()
        .eq("idnumber", idnumber);

      removedetails(idnumber);
    } catch (error) {
      alert("An unexpected error occurred.");
      console.error("Error during registration:", error.message);
    }
  };
  const removedetails = async (idnumber) => {
    try {
      const { error, data } = await supabase
        .from('users_details')
        .delete()
        .eq("idnumber", idnumber);

     
      window.location.reload();
    } catch (error) {
      alert("An unexpected error occurred.");
      console.error("Error during registration:", error.message);
    }
  };

  const fetch_data = async () => {
    try {
      const { error, data } = await supabase
        .from("users")
        .select("*")
        .eq("is_verified", "false");

      console.log(data);
      setEmployee(data);
    } catch (error) {
      alert("An unexpected error occurred.");
      console.error("Error during registration:", error.message);
    }
  };

  useEffect(() => {
    fetch_data();
  }, []);

  // Filter employees based on search term (idnumber or name)
  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.idnumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <Container fluid>
        <NavBar />
        <Container className="mt-4 text">
          <Form.Group as={Row} controlId="formPlaintextEmail" className="mb-3 search-group">
            <Form.Label column sm="12" md="2">
              Search Employee:
            </Form.Label>
            <Col sm="12" md="10">
              <Form.Control
                type="search"
                className="shadow w-25"
                placeholder="Search by ID or Name"
                aria-label="Search"
                value={searchTerm} // Bind search term to input
                onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
              />
            </Col>
          </Form.Group>
          <div className="table-responsive">
            <Table bordered className="shadow">
              <thead>
                <tr>
                  <th>ID Number</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.idnumber}</td>
                    <td>{employee.name}</td>
                    <td>{employee.role}</td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <Button
                          variant="success"
                          className="action-button me-2 mb-2 mb-md-0"
                          onClick={() => handleGrantAccess(employee.idnumber)}
                        >
                          <FaCheckCircle className="icon me-1" />
                          {"Grant"}
                        </Button>
                        <Button variant="danger" className="action-button" onClick={() => remove(employee.idnumber)}>
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
