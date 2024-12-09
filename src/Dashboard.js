import React from "react";
import NavBar from "./Navbar.js";
import { Container, Row, Col, Carousel, Card, Image } from "react-bootstrap";
import { RiTeamFill } from "react-icons/ri";
import "./App.css";
import Footer from "./Footer.js";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <NavBar />
        <Carousel className="my-carousel mt-3" interval={2000}>
          <Carousel.Item>
            <img className="d-block w-100" src="slider1.jpg" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="slider3.jpg" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="slider4.jpg" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="slider2.jpg" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="TRIBE.png" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="NCIP_TEAM.png" alt="" />
          </Carousel.Item>
        </Carousel>
        <Row className="mt-4 mb-5">
          <Col md={4} xs={12}>
            <Card className="shadow h-100">
              <Card.Body className="d-flex flex-column background">
                {" "}
                <h2 className="d-flex justify-content-center font mb-3">
                  MANDATE
                </h2>
                <p className="text mb-4">
                  The NCIP shall protect and promote the interest and well-being
                  of the ICCs/IPs with due regard to their beliefs, customs,
                  traditions, and institutions.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card className="shadow h-100">
              <Card.Body className="d-flex flex-column background">
                {" "}
                <h2 className="d-flex justify-content-center font mb-3">
                  MISSION
                </h2>
                <p className="text">
                  An enabling partner and lead advocate that formulates and
                  implements policies, plans, and programs for the well-being of
                  IPs with due regard to their ancestral domains and lands,
                  self-governance and empowerment, social justice and human
                  rights, and cultural integrity.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card className="shadow h-100">
              <Card.Body className="d-flex flex-column background">
                {" "}
                <h2 className="d-flex justify-content-center font mb-3">
                  VISION
                </h2>
                <p className="text">
                  An esteemed Commission committed to the delivery of quality
                  services to ICCs/IPs with their rights fully respected,
                  recognized, promoted, and protected.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Container className="text mb-5">
          <div className="d-flex justify-content-center align-items-center mb-5">
            <RiTeamFill size={33} className="me-3" />
            <h2 className="fw-bold">NCIP OFFICIALS</h2>
          </div>

          <Row className="d-flex justify-content-center">
            {/* Profile 1 */}
            <Col xs={12} md={4} lg={3} className="mb-4">
              <Card className="shadow-lg border-0 rounded-3">
                <Card.Img
                  variant="top"
                  src="Edgielit.jpg"
                  alt="Edgielit Pajarillo"
                  roundedCircle
                  className="mx-auto mt-3"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="text-center p-3">
                  <Card.Title className="fw-bold mb-2">
                    Edgielit Pajarillo
                  </Card.Title>
                  <Card.Text style={{ fontSize: "0.78rem" }}>
                    Community Development Officer III
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Profile 2 */}
            <Col xs={12} md={4} lg={3} className="mb-4">
              <Card className="shadow-lg border-0 rounded-3">
                <Card.Img
                  variant="top"
                  src="Emie.jpg"
                  alt="Emie Rose Dela Vega"
                  roundedCircle
                  className="mx-auto mt-3"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="text-center p-3">
                  <Card.Title className="fw-bold">
                    Emie Rose Dela Vega
                  </Card.Title>
                  <Card.Text>Midwife II</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Profile 3 */}
            <Col xs={12} md={4} lg={3} className="mb-4">
              <Card className="shadow-lg border-0 rounded-3">
                <Card.Img
                  variant="top"
                  src="Bernard.jpg"
                  alt="Bernard Taray"
                  roundedCircle
                  className="mx-auto mt-3"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="text-center p-3">
                  <Card.Title className="fw-bold">Bernard Taray</Card.Title>
                  <Card.Text>Tribal Affairs Assistant I</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Profile 4 */}
            <Col xs={12} md={4} lg={3} className="mb-4">
              <Card className="shadow-lg border-0 rounded-3">
                <Card.Img
                  variant="top"
                  src="Charry.jpg"
                  alt="Charry Calamba-Cojo"
                  roundedCircle
                  className="mx-auto mt-3"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="text-center p-3">
                  <Card.Title className="fw-bold">
                    Charry Calamba-Cojo
                  </Card.Title>
                  <Card.Text>Administrative Aide IV</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Profile 5 */}
            <Col xs={12} md={4} lg={3} className="mb-4">
              <Card className="shadow-lg border-0 rounded-3">
                <Card.Img
                  variant="top"
                  src="Arquila.jpg"
                  alt="Arquila Gando"
                  roundedCircle
                  className="mx-auto mt-3"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="text-center p-3">
                  <Card.Title className="fw-bold">Arquila Gando</Card.Title>
                  <Card.Text>Administrative Aide I</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Profile 6 */}
            <Col xs={12} md={4} lg={3} className="mb-4">
              <Card className="shadow-lg border-0 rounded-3">
                <Card.Img
                  variant="top"
                  src="Eleanor.jpg"
                  alt="Eleanor Galimpin"
                  roundedCircle
                  className="mx-auto mt-3"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="text-center p-3">
                  <Card.Title className="fw-bold">Eleanor Galimpin</Card.Title>
                  <Card.Text>Dentist II</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Profile 7 */}
            <Col xs={12} md={4} lg={3} className="mb-4">
              <Card className="shadow-lg border-0 rounded-3">
                <Card.Img
                  variant="top"
                  src="Concepcion.jpg"
                  alt="Concepcion Uson"
                  roundedCircle
                  className="mx-auto mt-3"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="text-center p-3">
                  <Card.Title className="fw-bold">Concepcion Uson</Card.Title>
                  <Card.Text>Nurse II</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Profile 8 */}
            <Col xs={12} md={4} lg={3} className="mb-4">
              <Card className="shadow-lg border-0 rounded-3">
                <Card.Img
                  variant="top"
                  src="Maria.jpg"
                  alt="Maria Gay Fuentes"
                  roundedCircle
                  className="mx-auto mt-3"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="text-center p-3">
                  <Card.Title className="fw-bold">Maria Gay Fuentes</Card.Title>
                  <Card.Text>Technical Staff</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Profile 9 */}
            <Col xs={12} md={4} lg={3} className="mb-4">
              <Card className="shadow-lg border-0 rounded-3">
                <Card.Img
                  variant="top"
                  src="Welmar.jpg"
                  alt="Welmar Sulhayan"
                  roundedCircle
                  className="mx-auto mt-3"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="text-center p-3">
                  <Card.Title className="fw-bold">Welmar Sulhayan</Card.Title>
                  <Card.Text>Technical Staff</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Profile 10 */}
            <Col xs={12} md={4} lg={3} className="mb-4">
              <Card className="shadow-lg border-0 rounded-3">
                <Card.Img
                  variant="top"
                  src="Starry.jpg"
                  alt="Starry Alcosero"
                  roundedCircle
                  className="mx-auto mt-3"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="text-center p-3">
                  <Card.Title className="fw-bold">Starry Alcosero</Card.Title>
                  <Card.Text>Technical Staff</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Profile 11 */}
            <Col xs={12} md={4} lg={3} className="mb-4">
              <Card className="shadow-lg border-0 rounded-3">
                <Card.Img
                  variant="top"
                  src="Gayo.jpg"
                  alt="Gayo Kahuya"
                  roundedCircle
                  className="mx-auto mt-3"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="text-center p-3">
                  <Card.Title className="fw-bold">Gayo Kahuya</Card.Title>
                  <Card.Text>Technical Staff</Card.Text>
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

export default Dashboard;
