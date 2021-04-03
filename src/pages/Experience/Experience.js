import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Card, CardDeck, Row, Col, Button, Accordion } from "react-bootstrap/";
import L_MICROFOCUS from "../../assets/img/experience/microfocus.png";
import L_OPEXGURU from "../../assets/img/experience/opexguru.png";
import Tilt from "react-tilt";
import "./my-experience.style.css";

const Experience = () => {
  return (
    <div id="experience ">
      <h1 className="title text-center">EXPERIENCE</h1>
      <div className="container">
        <Jumbotron className="jumbo-style">
          <CardDeck>
            <Row>
              <Col md={6}>
                <Container>
                  <Tilt options={{ max: 15 }}>
                    <Accordion>
                      <Card style={{ background: "transparent" }}>
                        <Card.Header
                          as="h5"
                          className="d-flex justify-content-center flex-wrap"
                          style={{ background: "white" }}
                        >
                          <Card.Img
                            variant="top"
                            className="img-resize-exp"
                            src={L_MICROFOCUS}
                            alt="MicroFocus logo"
                          />
                        </Card.Header>
                        <div>
                          <Card.Body className="d-flex justify-content-center flex-column">
                            <div>
                              <Card.Title className="text-center">
                                Intern - Software Development Engineer
                              </Card.Title>
                            </div>
                            <div>
                              <Card.Text className="text-center style">
                                <Card.Header>
                                  <div>
                                    <Accordion.Toggle
                                      as={Button}
                                      variant="link"
                                      eventKey="0"
                                    >
                                      Job Description
                                    </Accordion.Toggle>
                                  </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                  <div>
                                    <Card.Body>
                                      <Card.Text className="text-center style">
                                        <strong className="body-title-style ">
                                          Intern Software Development Engineer
                                        </strong>
                                        <br />
                                        <strong>Technology:</strong> Google
                                        Cloud Platform, Apache Pulsar,
                                        Kubernetes, Docker, Grafana
                                        <br />
                                        <strong>Duration:</strong> May 2020 -
                                        Aug 2020
                                        <br />
                                        <strong> Description </strong>
                                        <ul className="text-left">
                                          <li>
                                            <strong>
                                              Deployed ApachePulsar{" "}
                                            </strong>{" "}
                                            on Google Cloud Platform via Google
                                            Kubernetes Engine
                                          </li>
                                          <li>
                                            <strong>Programmed </strong> various
                                            Pulsar deployment YAML and realized
                                            bottlenecks using Prometheus
                                          </li>
                                          <li>
                                            <strong>Implemented </strong>{" "}
                                            out-of-box solutions such as
                                            geo-replication which reduced
                                            latency by <strong>20%</strong> and
                                            elastic file storage which conserved
                                            server costs and also accelerated
                                            IOPS by <strong>27%</strong>
                                          </li>
                                        </ul>
                                      </Card.Text>
                                    </Card.Body>
                                  </div>
                                </Accordion.Collapse>
                              </Card.Text>
                            </div>
                          </Card.Body>
                        </div>
                      </Card>
                    </Accordion>
                  </Tilt>
                </Container>
              </Col>
              <Col md={6}>
                <Container>
                  <Tilt options={{ max: 15 }}>
                    <Accordion>
                      <Card style={{ background: "transparent" }}>
                        <Card.Header
                          as="h5"
                          className="d-flex justify-content-center flex-wrap"
                          style={{ background: "white" }}
                        >
                          <Card.Img
                            variant="top"
                            className="img-resize-exp"
                            src={L_OPEXGURU}
                            alt="OpexGuru logo"
                          />
                        </Card.Header>
                        <div>
                          <Card.Body className="d-flex justify-content-center flex-column">
                            <div>
                              <Card.Title className="text-center">
                                Intern - Data Analyst
                              </Card.Title>
                            </div>
                            <div>
                              <Card.Text className="text-center style">
                                <Card.Header>
                                  <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="0"
                                  >
                                    Job Description
                                  </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                  <div>
                                    <Card.Body>
                                      <Card.Text className="text-center style">
                                        <strong className="body-title-style ">
                                          Intern Technical Data Analyst
                                        </strong>
                                        <br />
                                        <strong>Technology:</strong> Jupyter
                                        (Python), Tableau
                                        <br />
                                        <strong>Duration:</strong> July 2018 -
                                        Jan 2019
                                        <br />
                                        <strong> Description </strong>
                                        <ul className="text-left">
                                          <li>
                                            Leveraged{" "}
                                            <strong>Data Analytics </strong> and
                                            proposed potential solutions to
                                            reduce supply chain inefficiencies
                                          </li>
                                          <li>
                                            Slashed client's shipping costs by{" "}
                                            <strong>13%</strong> by conducting
                                            assessments of consulting
                                            assignments
                                          </li>
                                          <li>
                                            Applauded for data-driven insights
                                            that improved order cancellation
                                            metric of a key client by{" "}
                                            <strong>38%</strong>
                                          </li>
                                        </ul>
                                      </Card.Text>
                                    </Card.Body>
                                  </div>
                                </Accordion.Collapse>
                              </Card.Text>
                            </div>
                          </Card.Body>
                        </div>
                      </Card>
                    </Accordion>
                  </Tilt>
                </Container>
              </Col>
            </Row>
          </CardDeck>
        </Jumbotron>
      </div>
    </div>
  );
};

export default Experience;
