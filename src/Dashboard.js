import React from 'react';
import NavBar from "./Navbar.js";
import { Container, Row, Col, Carousel, Card, Image } from 'react-bootstrap';
import { RiTeamFill } from "react-icons/ri";
import { motion } from 'framer-motion';
import "./App.css";

function Dashboard() {
    const fadeInLeft = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8 }
    };
    
    const fadeInRight = {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8 }
    };
    
    return (
        <>
            <Container fluid>
                <NavBar />
                <Carousel className="my-carousel mt-3" interval={2000}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="slider1.jpg"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="slider3.jpg"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="slider4.jpg"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="slider2.jpg"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="TRIBE.png"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="NCIP_TEAM.png"
                            alt=""
                        />
                    </Carousel.Item>
                </Carousel>
                <Row className="mt-4 mb-5">
                    <Col md={4}>
                        <Card className='shadow'>
                            <Card.Body>
                                <Card className='shadow background'>
                                    <Card.Body className='p-5'>
                                        <h2 className='d-flex justify-content-center font'>MANDATE</h2>
                                        <p className='text'>
                                            The NCIP shall protect and promote the interest and well-being of 
                                            the ICCs/IPs with due regard to their beliefs, customs, traditions and institutions.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='shadow'>
                            <Card.Body>
                                <Card className='shadow background'>
                                    <Card.Body className='p-4'>
                                        <h2 className='d-flex justify-content-center font'>MISSION</h2>
                                        <p className='text'>
                                            An enabling partner and lead advocate that formulates and implements policies, plans, 
                                            and programs for the well-being of IPs with due regard to their ancestral domains and lands, 
                                            self-governance and empowerment, social justice and human rights, and cultural integrity.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='shadow'>
                            <Card.Body>
                                <Card className='shadow background'>
                                    <Card.Body className='p-5'>
                                        <h2 className='d-flex justify-content-center font'>VISION</h2>
                                        <p className='text'>
                                            An esteemed Commission committed to the delivery of quality services to ICCs/IPs 
                                            with their rights fully respected, recognized, promoted, and protected.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Container className="text mb-5">
                    <div className="d-flex justify-content-center align-items-center mb-5">
                        <RiTeamFill size={33} className="me-3" />
                        <h2 className="fw-bold mb-0">NCIP BASE OFFICIALS</h2>
                    </div>

                    <motion.div initial="initial" whileInView="animate" variants={fadeInLeft} viewport={{ once: true }}>
                        <Row className="align-items-center mb-4">
                            <Col xs={12} md={3} className="text-center">
                                <Image src="https://via.placeholder.com/150" roundedCircle width="190" height="190" />
                            </Col>
                            <Col xs={12} md={9} className="d-flex flex-column">
                                <h3>Edgielit Pajarillo</h3>
                                <p>Community Development Officer III</p>
                            </Col>
                        </Row>
                    </motion.div>

                    <motion.div initial="initial" whileInView="animate" variants={fadeInRight} viewport={{ once: true }}>
                        <Row className="align-items-center mb-4">
                            <Col xs={12} md={9} className="d-flex flex-column text-md-end text-start">
                                <h3>Emie Rose Dela Vega</h3>
                                <p>Midwife II</p>
                            </Col>
                            <Col xs={12} md={3} className="text-center">
                                <Image src="https://via.placeholder.com/150" roundedCircle width="190" height="190" className="mx-auto" />
                            </Col>
                        </Row>
                    </motion.div>

                    <motion.div initial="initial" whileInView="animate" variants={fadeInLeft} viewport={{ once: true }}>
                        <Row className="align-items-center mb-4">
                            <Col xs={12} md={3} className="text-center">
                                <Image src="https://via.placeholder.com/150" roundedCircle width="190" height="190" />
                            </Col>
                            <Col xs={12} md={9} className="d-flex flex-column">
                                <h3>Bernard Taray</h3>
                                <p>Tribal Affairs Assistant I</p>
                            </Col>
                        </Row>
                    </motion.div>

                    <motion.div initial="initial" whileInView="animate" variants={fadeInRight} viewport={{ once: true }}>
                        <Row className="align-items-center mb-4">
                            <Col xs={12} md={9} className="d-flex flex-column text-md-end text-start">
                                <h3>Charry Calamba-Cojo</h3>
                                <p>Administrative Aide IV</p>
                            </Col>
                            <Col xs={12} md={3} className="text-center">
                                <Image src="https://via.placeholder.com/150" roundedCircle width="190" height="190" className="mx-auto" />
                            </Col>
                        </Row>
                    </motion.div>

                    <motion.div initial="initial" whileInView="animate" variants={fadeInLeft} viewport={{ once: true }}>
                        <Row className="align-items-center mb-4">
                            <Col xs={12} md={3} className="text-center">
                                <Image src="https://via.placeholder.com/150" roundedCircle width="190" height="190" />
                            </Col>
                            <Col xs={12} md={9} className="d-flex flex-column">
                                <h3>Arquila Gando</h3>
                                <p>Administrative Aide I</p>
                            </Col>
                        </Row>
                    </motion.div>

                    <motion.div initial="initial" whileInView="animate" variants={fadeInRight} viewport={{ once: true }}>
                        <Row className="align-items-center mb-4">
                            <Col xs={12} md={9} className="d-flex flex-column text-md-end text-start">
                                <h3>Eleanor Galimpin</h3>
                                <p>Dentist II</p>
                            </Col>
                            <Col xs={12} md={3} className="text-center">
                                <Image src="https://via.placeholder.com/150" roundedCircle width="190" height="190" className="mx-auto" />
                            </Col>
                        </Row>
                    </motion.div>

                    <motion.div initial="initial" whileInView="animate" variants={fadeInLeft} viewport={{ once: true }}>
                        <Row className="align-items-center mb-4">
                            <Col xs={12} md={3} className="text-center">
                                <Image src="https://via.placeholder.com/150" roundedCircle width="190" height="190" />
                            </Col>
                            <Col xs={12} md={9} className="d-flex flex-column">
                                <h3>Arquila Gando</h3>
                                <p>Administrative Aide I</p>
                            </Col>
                        </Row>
                    </motion.div>

                    <motion.div initial="initial" whileInView="animate" variants={fadeInRight} viewport={{ once: true }}>
                        <Row className="align-items-center mb-4">
                            <Col xs={12} md={9} className="d-flex flex-column text-md-end text-start">
                                <h3>Concepcion Uson</h3>
                                <p>Nurse II</p>
                            </Col>
                            <Col xs={12} md={3} className="text-center">
                                <Image src="https://via.placeholder.com/150" roundedCircle width="190" height="190" className="mx-auto" />
                            </Col>
                        </Row>
                    </motion.div>

                    <motion.div initial="initial" whileInView="animate" variants={fadeInLeft} viewport={{ once: true }}>
                        <Row className="align-items-center mb-4">
                            <Col xs={12} md={3} className="text-center">
                                <Image src="https://via.placeholder.com/150" roundedCircle width="190" height="190" />
                            </Col>
                            <Col xs={12} md={9} className="d-flex flex-column">
                                <h3>Maria Gay Fuentes</h3>
                                <p>Technical Staff</p>
                            </Col>
                        </Row>
                    </motion.div>

                    <motion.div initial="initial" whileInView="animate" variants={fadeInRight} viewport={{ once: true }}>
                        <Row className="align-items-center mb-4">
                            <Col xs={12} md={9} className="d-flex flex-column text-md-end text-start">
                                <h3>Welmar Sulhayan</h3>
                                <p>Technical Staff</p>
                            </Col>
                            <Col xs={12} md={3} className="text-center">
                                <Image src="https://via.placeholder.com/150" roundedCircle width="190" height="190" className="mx-auto" />
                            </Col>
                        </Row>
                    </motion.div>

                    <motion.div initial="initial" whileInView="animate" variants={fadeInLeft} viewport={{ once: true }}>
                        <Row className="align-items-center mb-4">
                            <Col xs={12} md={3} className="text-center">
                                <Image src="https://via.placeholder.com/150" roundedCircle width="190" height="190" />
                            </Col>
                            <Col xs={12} md={9} className="d-flex flex-column">
                                <h3>Starry Alcosero</h3>
                                <p>Technical Staff</p>
                            </Col>
                        </Row>
                    </motion.div>

                    <motion.div initial="initial" whileInView="animate" variants={fadeInRight} viewport={{ once: true }}>
                        <Row className="align-items-center mb-4">
                            <Col xs={12} md={9} className="d-flex flex-column text-md-end text-start">
                                <h3>Gayo Kahuya</h3>
                                <p>Technical Staff</p>
                            </Col>
                            <Col xs={12} md={3} className="text-center">
                                <Image src="https://via.placeholder.com/150" roundedCircle width="190" height="190" className="mx-auto" />
                            </Col>
                        </Row>
                    </motion.div>
                </Container>
            </Container>
        </>
    );
}

export default Dashboard;