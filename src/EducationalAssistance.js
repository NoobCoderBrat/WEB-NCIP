import "./App.css";
import NavBar from "./Navbar.js";
import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "./Footer.js";

function EducationalAssistance() {
  return (
    <>
      <Container fluid>
        <NavBar />
        <Container fluid className="mt-4 mb-5">
          <Row className="g-4">
            <Col md={6} xs={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold text-center mb-3">
                    Scholarships and Financial Assistance
                  </Card.Title>
                  <Card.Text>
                    The NCIP provides scholarships and financial assistance to
                    indigenous students at various levels of education,
                    including primary, secondary, tertiary, and
                    technical-vocational education. These scholarships may cover
                    tuition fees, school supplies, transportation costs, and
                    other educational expenses.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold text-center mb-3">
                    Special Education Programs
                  </Card.Title>
                  <Card.Text>
                    The EAP may include special education programs tailored to
                    the needs of indigenous students, particularly those from
                    remote or marginalized communities. These programs may focus
                    on enhancing basic literacy and numeracy skills, promoting
                    cultural sensitivity in teaching practices, and providing
                    support for students with special learning needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold text-center mb-3">
                    Capacity Building and Training
                  </Card.Title>
                  <Card.Text>
                    NCIP may offer capacity building and training programs for
                    indigenous teachers, education administrators, and community
                    leaders. These programs aim to enhance the quality of
                    education in indigenous communities, improve teaching
                    methodologies, and promote the use of indigenous languages
                    and cultural materials in the curriculum.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold text-center mb-3">
                    Cultural Sensitivity and Inclusivity
                  </Card.Title>
                  <Card.Text>
                    The EAP emphasizes the importance of promoting cultural
                    sensitivity and inclusivity in the education system. This
                    may involve developing culturally relevant curriculum
                    materials, integrating indigenous knowledge systems and
                    practices into the curriculum, and fostering respect for
                    indigenous cultures and identities among teachers and
                    students.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold text-center mb-3">
                    Community Engagement and Empowerment
                  </Card.Title>
                  <Card.Text>
                    NCIP works closely with indigenous communities to identify
                    their educational needs, priorities, and aspirations. The
                    EAP may include community engagement activities such as
                    consultation meetings, participatory planning sessions, and
                    capacity building workshops aimed at empowering communities
                    to take ownership of their education initiatives.
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

export default EducationalAssistance;
