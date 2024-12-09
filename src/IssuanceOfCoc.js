import "./App.css";
import NavBar from "./Navbar.js";
import { Container, Card, Row, Col } from "react-bootstrap";
import Footer from "./Footer.js";

function IssuanceOfCoc() {
  return (
    <>
      <Container fluid>
        <NavBar />
        <Container className="mt-4 mb-5" fluid>
          <Row className="g-4">
            <Col md={6} xs={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold text-center mb-3">
                    Filing of Application
                  </Card.Title>
                  <Card.Text>
                    Indigenous communities, through their leaders or
                    representatives, file an application with the NCIP for the
                    recognition of their ancestral domain or ancestral land.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold text-center mb-3">
                    Verification and Evaluation
                  </Card.Title>
                  <Card.Text>
                    NCIP conducts verification and evaluation of the application
                    to determine its validity and compliance with legal
                    requirements.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold text-center mb-3">
                    Field Investigation and Validation
                  </Card.Title>
                  <Card.Text>
                    NCIP, along with representatives from concerned agencies and
                    stakeholders, conducts field investigation and validation to
                    verify the claims of the indigenous community.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold text-center mb-3">
                    Consultation and Free Prior Informed Consent (FPIC)
                  </Card.Title>
                  <Card.Text>
                    NCIP facilitates a series of consultations with the
                    indigenous community to obtain their free prior informed
                    consent regarding the application for CADT/CALT. This
                    process ensures that the rights and interests of the
                    indigenous community are respected.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold text-center mb-3">
                    Resolution and Endorsement
                  </Card.Title>
                  <Card.Text>
                    Based on the findings of the investigation and consultation
                    process, NCIP issues a resolution endorsing the application
                    for CADT/CALT.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold text-center mb-3">
                    Issuance of CADT/CALT
                  </Card.Title>
                  <Card.Text>
                    Upon approval by the NCIP, the CADT/CALT is issued to the
                    indigenous community, formally recognizing their rights over
                    their ancestral domain or ancestral land.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Container>
    </>
  );
}

export default IssuanceOfCoc;
