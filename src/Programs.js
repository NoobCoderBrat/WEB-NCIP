import "./App.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import NavBar from "./Navbar.js";
import Footer from "./Footer.js";

function Program() {
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
                    Ancestral Domain/Land Recognition
                  </Card.Title>
                  <Card.Text>
                    Through the Indigenous Peoples Rights Act (IPRA),
                    Certificate of Ancestral Domain Titles(CADTs) are issued to
                    formally recognize the rights of possession and ownership of
                    Indigenous Cultural Communities/Indigenous Peoples
                    (ICCs/IPs) over their ancestral domains as identified and
                    delineated in accordance with this law, while Certificate of
                    Ancestral Land Titles (CALTs) formally recognize the rights
                    of ICCs/IPs over their ancestral lands.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold text-center mb-3">
                    Assistance to ADSDPP Formulation
                  </Card.Title>
                  <Card.Text>
                    Provision of technical and/or financial assistance to the
                    Indigenous Cultural Communities/Indigenous Peoples
                    (ICCs/IPs) in the formulation of their Ancestral Domain
                    Sustainable Development and Protection Plan (ADSDPP). This
                    holistic, comprehensive, and integrated plan shall promote a
                    culture and rights-based approach to development.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold text-center mb-3">
                    Culturally Appropriate Responsive and Gender-Sensitive
                    Services
                  </Card.Title>
                  <Card.Text>
                    The program provides policy support and assistance to
                    ICCs/IPs through funding under the MOOE of the Commission.
                    It also involves coordination with relevant government
                    agencies to ensure the ICCs/IPs are directly benefited.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold text-center mb-3">
                    IP Culture Services
                  </Card.Title>
                  <Card.Text>
                    The program assists cultural communities in preserving their
                    cultural and historical heritage, promotes public awareness
                    and respect for IPs' rights, and helps support them in
                    practicing their rituals and ceremonies.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold text-center mb-3">
                    Gender and Rights-Based Services
                  </Card.Title>
                  <Card.Text>
                    This program protects the rights of Indigenous Peoples to
                    self-governance and self-determination, ensuring the
                    strengthening of their socio-political structures and their
                    involvement in decision-making bodies.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold text-center mb-3">
                    IP Rights Advocacy and Monitoring
                  </Card.Title>
                  <Card.Text>
                    This program advocates for the recognition and protection of
                    Indigenous Peoples' rights, including monitoring treaty
                    obligations and enhancing the IP Human Rights Program.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold text-center mb-3">
                    IP Education and Advocacy Services
                  </Card.Title>
                  <Card.Text>
                    This program provides various educational support services,
                    such as scholarships and educational advocacy for Indigenous
                    Peoples (IPs), including financial aid and assistance in
                    licensure exams.
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

export default Program;
