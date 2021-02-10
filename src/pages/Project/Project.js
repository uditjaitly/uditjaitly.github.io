import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Tilt from "react-tilt";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Lsurvival from "../../assets/img/projects/survivalgame.png";
import Lsmartcar from "../../assets/img/projects/smartcar.png";
import LTwitter from "../../assets/img/projects/twitter.png";
import Lcustomer from "../../assets/img/projects/customersegmentation.png";
import Limage from "../../assets/img/projects/imagecaptioning.png";
import Ltodo from "../../assets/img/projects/todoapp.png";
import Lpastry from "../../assets/img/projects/pastry.png";
import Lnds from "../../assets/img/projects/nds.png";
import LFs from "../../assets/img/projects/fsharp.png";
import LSuave from "../../assets/img/projects/suave.png";

import LAkka from "../../assets/img/projects/akka.png";

import LRBT from "../../assets/img/projects/rbtimplementation.png";
import LLeetcode from "../../assets/img/projects/leetcode.png";
import LBudget from "../../assets/img/projects/budget.png";
import LAmazonclone from "../../assets/img/projects/amazonclone.png";
import LFirebase from "../../assets/img/projects/firebase.png";
import LExpress from "../../assets/img/projects/express.png";
import LHeroku from "../../assets/img/projects/heroku.png";
import LRedux from "../../assets/img/projects/redux.png";
import LMongo from "../../assets/img/projects/mongodb.png";
import Image from "react-bootstrap/Image";
import Ltensor from "../../assets/icons/tensor.png";
import Lmaya from "../../assets/icons/autodesk.png";
import Laws from "../../assets/icons/aws-2.svg";
import Lc from "../../assets/icons/c.svg";
import Lcss from "../../assets/icons/css-5.svg";
import LUnity from "../../assets/icons/unity.png";
import Ldocker from "../../assets/icons/docker-logo.png";
import Lhtml from "../../assets/icons/html5.svg";
import Ljava from "../../assets/icons/java-4.svg";
import Ljupyter from "../../assets/icons/jupyter.png";
import Lnodejs from "../../assets/icons/nodejs-1.svg";
import Lpython from "../../assets/icons/python-4.svg";
import Lreact from "../../assets/icons/react.svg";
import Lgoogle from "../../assets/icons/google-cloud-1.svg";
import Lkube from "../../assets/icons/kube.png";
import Lcsharp from "../../assets/icons/csharp.png";

import "./my-projects.style.css";
const Projects = () => {
  return (
    <div id="project">
      <h1 className="title text-center">PROJECTS</h1>
      <Jumbotron className="jumbo-style">
        <CardDeck>
          <Container>
            <Row>
              {/*Amazon Clone*/}
              <Col>
                <div className="d-flex justify-content-between flex-column mt-1">
                  <Tilt options={{ max: 5 }}>
                    <Accordion>
                      <Card style={{ background: "transparent" }}>
                        <Card.Header
                          as="h5"
                          className="d-flex justify-content-center flex-wrap"
                        >
                          <Card.Title className="heading justify-content-center">
                            Amazon Clone
                          </Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center style d-flex justify-content-center flex-column">
                          <div>
                            <Card.Img
                              variant="top"
                              className="img-resize"
                              src={LAmazonclone}
                              alt="amazon clone"
                            />
                          </div>

                          <div>
                            <Card.Text className="text-center style">
                              <Card.Header>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey="0"
                                >
                                  <div className="justify-content-center">
                                    {" "}
                                    Project Description{" "}
                                  </div>
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse
                                eventKey="0"
                                className="proj-des text-left"
                              >
                                <Card.Body>
                                  <strong>Description:</strong> Amazon
                                  E-Commerce website clone developed using MERN
                                  stack
                                  <hr />
                                  <strong>Features:</strong>
                                  <ul className="list-styles pt-1">
                                    <li>User Sign-In with authentication</li>
                                    <li>
                                      Shipping screen & Paypal payment gateway{" "}
                                    </li>
                                    <li>
                                      Admin functionalities such as Add
                                      Products, View Products, View Sellers
                                    </li>
                                    <li>Reviews for products and sellers</li>
                                  </ul>
                                  <hr />
                                  <strong>Tech used:</strong>
                                  <ul>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={Lnodejs}
                                          alt="Nodejs"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        Node.js
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={Lreact}
                                          alt="React"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        React.js
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={LMongo}
                                          alt="Mongo"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        MongoDB
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={LExpress}
                                          alt="Express"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        Express.js
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={LRedux}
                                          alt="Redux"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        Redux.js
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={LHeroku}
                                          alt="Heroku"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        Heroku
                                      </span>
                                    </li>
                                  </ul>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card.Text>
                          </div>
                          <div className="btn-toolbar ">
                            <a
                              className="mb-2 col-md-12"
                              href="https://amazon-clone-udit-jaitly.herokuapp.com/"
                            >
                              <Button
                                className="mb-2 col-md-12"
                                variant="outline-success"
                              >
                                View Demo
                              </Button>
                            </a>
                          </div>

                          <a
                            href="https://github.com/uditjaitly/FSharp-DistributedSystems/tree/main/suave/SuaveTest"
                            className="mb-2"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <i className="fab fa-github " aria-hidden="true" />
                          </a>
                        </Card.Body>
                      </Card>
                    </Accordion>
                  </Tilt>
                </div>
              </Col>

              {/*Twitter APP*/}

              <Col>
                <div className="d-flex justify-content-between flex-column mt-1">
                  <Tilt options={{ max: 5 }}>
                    <Accordion>
                      <Card style={{ background: "transparent" }}>
                        <Card.Header
                          as="h5"
                          className="d-flex justify-content-center flex-wrap text-center"
                        >
                          <Card.Title className="heading justify-content-center">
                            Distributed Systems: Twitter
                          </Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center style d-flex justify-content-center flex-column">
                          <div>
                            <Card.Img
                              variant="top"
                              className="img-resize"
                              src={LTwitter}
                              alt="Twitter"
                            />
                          </div>

                          <div>
                            <Card.Text className="text-center style">
                              <Card.Header>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey="0"
                                >
                                  <div className="justify-content-center">
                                    {" "}
                                    Project Description{" "}
                                  </div>
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse
                                eventKey="0"
                                className="proj-des text-left"
                              >
                                <Card.Body>
                                  <strong>Description:</strong> Implemented
                                  Twitter system with integrated web-sockets API
                                  <hr />
                                  <strong>Features:</strong>
                                  <ul className="list-styles pt-1">
                                    <li>Handles new sign-ups</li>
                                    <li>
                                      Implemented user functionality like
                                      tweets, retweets, personal profile page,
                                      follow, search, mention
                                    </li>
                                    <li>
                                      Simulated >20000 concurrent users with
                                      1500 requests each
                                    </li>
                                  </ul>
                                  <hr />
                                  <strong>Tech used:</strong>
                                  <ul>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={LFs}
                                          alt="F#"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        F#
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={LAkka}
                                          alt="Akka"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        Akka.NET
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={LSuave}
                                          alt="Suave"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        Suave
                                      </span>
                                    </li>
                                  </ul>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card.Text>
                          </div>
                          <div className="btn-toolbar ">
                            <a
                              className="mb-2 col-md-12"
                              href="https://www.youtube.com/watch?v=1icltfeHeqE"
                            >
                              <Button
                                className="mb-2 col-md-12"
                                variant="outline-success"
                              >
                                View Demo
                              </Button>
                            </a>
                          </div>

                          <a
                            href="https://github.com/uditjaitly"
                            className="mb-2"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <i className="fab fa-github " aria-hidden="true" />
                          </a>
                        </Card.Body>
                      </Card>
                    </Accordion>
                  </Tilt>
                </div>
              </Col>

              {/*IMAGE CAPTIONING*/}

              <Col>
                <div className="d-flex justify-content-between flex-column mt-1">
                  <Tilt options={{ max: 5 }}>
                    <Accordion>
                      <Card style={{ background: "transparent" }}>
                        <Card.Header
                          as="h5"
                          className="d-flex justify-content-center flex-wrap"
                        >
                          <Card.Title className="heading justify-content-center">
                            Budget App
                          </Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center style d-flex justify-content-center flex-column">
                          <div>
                            <Card.Img
                              variant="top"
                              className="img-resize"
                              src={LBudget}
                              alt="budget"
                            />
                          </div>

                          <div>
                            <Card.Text className="text-center style">
                              <Card.Header>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey="0"
                                >
                                  <div className="justify-content-center">
                                    {" "}
                                    Project Description{" "}
                                  </div>
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse
                                eventKey="0"
                                className="proj-des text-left"
                              >
                                <Card.Body>
                                  <strong>Description:</strong> A frontend
                                  focused web app that uses allows the users to
                                  keep track of their expenses.
                                  <hr />
                                  <strong>Features:</strong>
                                  <ul className="list-styles pt-1">
                                    <li>
                                      User authentication using Google accounts
                                    </li>
                                    <li>
                                      Users can add, update, delete, sort and
                                      view summary for expenses{" "}
                                    </li>
                                  </ul>
                                  <hr />
                                  <strong>Tech used:</strong>
                                  <ul>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={Lreact}
                                          alt="React"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        React.js
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={LRedux}
                                          alt="Redux"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        Redux.js
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={LFirebase}
                                          alt="Firebase"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        Firebase
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={LHeroku}
                                          alt="Heroku"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        Heroku
                                      </span>
                                    </li>
                                  </ul>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card.Text>
                          </div>
                          <div className="btn-toolbar ">
                            <a
                              className="mb-2 col-md-12"
                              href="https://budget-app-heroku-1996.herokuapp.com/"
                            >
                              <Button
                                className="mb-2 col-md-12"
                                variant="outline-success"
                              >
                                View Demo
                              </Button>
                            </a>
                          </div>

                          <a
                            href="https://github.com/uditjaitly"
                            className="mb-2"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <i className="fab fa-github " aria-hidden="true" />
                          </a>
                        </Card.Body>
                      </Card>
                    </Accordion>
                  </Tilt>
                </div>
              </Col>
            </Row>
            <br></br>
            <br></br>

            {/*Pastry*/}

            <Row>
              <Col>
                <div className="d-flex justify-content-between flex-column mt-1">
                  <Tilt options={{ max: 5 }}>
                    <Accordion>
                      <Card style={{ background: "transparent" }}>
                        <Card.Header
                          as="h5"
                          className="d-flex justify-content-center flex-wrap text-center"
                        >
                          <Card.Title className="heading justify-content-center">
                            Distributed Systems: Pastry
                          </Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center style d-flex justify-content-center flex-column">
                          <div>
                            <Card.Img
                              variant="top"
                              className="img-resize"
                              src={Lpastry}
                              alt="pastry"
                            />
                          </div>

                          <div>
                            <Card.Text className="text-center style">
                              <Card.Header>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey="0"
                                >
                                  <div className="justify-content-center">
                                    {" "}
                                    Project Description{" "}
                                  </div>
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse
                                eventKey="0"
                                className="proj-des text-left"
                              >
                                <Card.Body>
                                  <strong>Description:</strong> Implemented
                                  Pastry, which is a scalable, decentralized
                                  object location and routing for large-scale
                                  peer- to-peer systems using actor model
                                  <hr />
                                  <strong>Features:</strong>
                                  <ul className="list-styles pt-1">
                                    <li>
                                      Achieved convergence in network with 10000
                                      participating nodes and 5000 requests
                                    </li>
                                    <li>
                                      Each node maintains and updates it's
                                      routing table{" "}
                                    </li>
                                  </ul>
                                  <hr />
                                  <strong>Tech used:</strong>
                                  <ul>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={LFs}
                                          alt="F#"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        F#
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={LAkka}
                                          alt="Akka"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        Akka.NET
                                      </span>
                                    </li>
                                  </ul>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card.Text>
                          </div>
                          <div className="d-flex justify-content-center text-center">
                            <a
                              href="https://github.com/uditjaitly"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fab fa-github" aria-hidden="true" />
                            </a>
                          </div>
                        </Card.Body>
                      </Card>
                    </Accordion>
                  </Tilt>
                </div>
              </Col>

              {/*Customer Segmentation*/}

              <Col>
                <div className="d-flex justify-content-between flex-column mt-1">
                  <Tilt options={{ max: 5 }}>
                    <Accordion>
                      <Card style={{ background: "transparent" }}>
                        <Card.Header
                          as="h5"
                          className="d-flex justify-content-center flex-wrap"
                        >
                          <Card.Title className="heading justify-content-center">
                            Customer Segmentation
                          </Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center style d-flex justify-content-center flex-column">
                          <div>
                            <Card.Img
                              variant="top"
                              className="img-resize"
                              src={Lcustomer}
                              alt="CustomerSeg"
                            />
                          </div>

                          <div>
                            <Card.Text className="text-center style">
                              <Card.Header>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey="0"
                                >
                                  <div className="justify-content-center">
                                    {" "}
                                    Project Description{" "}
                                  </div>
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse
                                eventKey="0"
                                className="proj-des text-left"
                              >
                                <Card.Body>
                                  <strong>Description:</strong> Segmented
                                  customer into various categories using
                                  unsupervised learning techniques
                                  <hr />
                                  <strong>Features:</strong>
                                  <ul className="list-styles pt-1">
                                    <li>
                                      Performed PCA for dimensionality reduction
                                    </li>
                                    <li>
                                      Found hidden patters in the dataset which
                                      distinguishes the customers into separate
                                      categories
                                    </li>
                                  </ul>
                                  <hr />
                                  <strong>Tech used:</strong>
                                  <ul>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={Lpython}
                                          alt="python"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        Python
                                      </span>
                                    </li>

                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={Ljupyter}
                                          alt="jupyter"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        Jupyter
                                      </span>
                                    </li>
                                  </ul>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card.Text>
                          </div>
                          <div className="d-flex justify-content-center text-center">
                            <a
                              href="https://github.com/uditjaitly/CustomerSegmentation"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fab fa-github" aria-hidden="true" />
                            </a>
                          </div>
                        </Card.Body>
                      </Card>
                    </Accordion>
                  </Tilt>
                </div>
              </Col>

              {/*Survival Game*/}

              <Col>
                <div className="d-flex justify-content-between flex-column mt-1">
                  <Tilt options={{ max: 5 }}>
                    <Accordion>
                      <Card style={{ background: "transparent" }}>
                        <Card.Header
                          as="h5"
                          className="d-flex justify-content-center flex-wrap"
                        >
                          <Card.Title className="heading justify-content-center">
                            Survival Game
                          </Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center style d-flex justify-content-center flex-column">
                          <div>
                            <Card.Img
                              variant="top"
                              className="img-resize"
                              src={Lsurvival}
                              alt="survivalgame"
                            />
                          </div>
                          <div>
                            <Card.Text className="text-center style">
                              <Card.Header>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey="0"
                                >
                                  <div className="justify-content-center">
                                    {" "}
                                    Project Description{" "}
                                  </div>
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse
                                eventKey="0"
                                className="proj-des text-left"
                              >
                                <Card.Body>
                                  <strong>Description:</strong> Developed a
                                  first person shooter survival game
                                  <hr />
                                  <strong>Features:</strong>
                                  <ul className="list-styles pt-1">
                                    <li>
                                      Modelled assets in Maya and implemented
                                      the logic in Unity
                                    </li>
                                    <li>
                                      Implemented dynamic elements in the game
                                      like animated enemies, day-night cycle etc
                                    </li>
                                  </ul>
                                  <hr />
                                  <strong>Tech used:</strong>
                                  <ul>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={LUnity}
                                          alt="Unity"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        Unity Engine
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={Lmaya}
                                          alt="Maya"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        Maya
                                      </span>
                                    </li>

                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={Lcsharp}
                                          alt="csharp"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        C#
                                      </span>
                                    </li>
                                  </ul>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card.Text>
                          </div>
                          <div className="d-flex justify-content-center text-center">
                            <a
                              href="https://github.com/uditjaitly"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fab fa-github" aria-hidden="true" />
                            </a>
                          </div>
                        </Card.Body>
                      </Card>
                    </Accordion>
                  </Tilt>
                </div>
              </Col>
            </Row>
            <br></br>

            {/*LEETCODE*/}
            <Row>
              <Col md="4">
                <div className="d-flex justify-content-between flex-column mt-1">
                  <Tilt options={{ max: 5 }}>
                    <Accordion>
                      <Card style={{ background: "transparent" }}>
                        <Card.Header
                          as="h5"
                          className="d-flex justify-content-center flex-wrap"
                        >
                          <Card.Title className="heading justify-content-center">
                            Leetcode Problems
                          </Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center style d-flex justify-content-center flex-column">
                          <div>
                            <Card.Img
                              variant="top"
                              className="img-resize"
                              src={LLeetcode}
                              alt="leetcode"
                            />
                          </div>
                          <div>
                            <Card.Text className="text-center style">
                              <Card.Header>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey="0"
                                >
                                  <div className="justify-content-center">
                                    {" "}
                                    Project Description{" "}
                                  </div>
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse
                                eventKey="0"
                                className="proj-des text-left"
                              >
                                <Card.Body>
                                  <strong>Description:</strong> My accepted
                                  solutions to hundreds of leetcode problems
                                  <hr />
                                  <strong>Tech used:</strong>
                                  <ul>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={Lc}
                                          alt="C++"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        C++
                                      </span>
                                    </li>
                                  </ul>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card.Text>
                          </div>
                          <div className="d-flex justify-content-center text-center">
                            <a
                              href="https://github.com/uditjaitly/leetcode-submissions"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fab fa-github" aria-hidden="true" />
                            </a>
                          </div>
                        </Card.Body>
                      </Card>
                    </Accordion>
                  </Tilt>
                </div>
              </Col>

              <Col>
                <div className="d-flex justify-content-between flex-column mt-1">
                  <Tilt options={{ max: 5 }}>
                    <Accordion>
                      <Card style={{ background: "transparent" }}>
                        <Card.Header
                          as="h5"
                          className="d-flex justify-content-center flex-wrap"
                        >
                          <Card.Title className="heading justify-content-center">
                            Smart Car
                          </Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center style d-flex justify-content-center flex-column">
                          <div>
                            <Card.Img
                              variant="top"
                              className="img-resize"
                              src={Lsmartcar}
                              alt="smart cab"
                            />
                          </div>

                          <div>
                            <Card.Text className="text-center style">
                              <Card.Header>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey="0"
                                >
                                  <div className="justify-content-center">
                                    {" "}
                                    Project Description{" "}
                                  </div>
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse
                                eventKey="0"
                                className="proj-des text-left"
                              >
                                <Card.Body>
                                  <strong>Description:</strong> Training an
                                  Autonomous Car (Agent) via Reinforcement
                                  Learning in a simulated environment
                                  <hr />
                                  <strong>Features:</strong>
                                  <ul className="list-styles pt-1">
                                    <li>2D road grid with automated traffic</li>
                                    <li>
                                      Agent(Car) responds to the environment{" "}
                                    </li>
                                  </ul>
                                  <hr />
                                  <strong>Tech used:</strong>
                                  <ul>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={Lpython}
                                          alt="Python"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        Python
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={Ljupyter}
                                          alt="Jupyter"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        Jupyter
                                      </span>
                                    </li>
                                  </ul>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card.Text>
                          </div>
                          <div className="d-flex justify-content-center text-center">
                            <a
                              href="https://github.com/uditjaitly/smartcab"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fab fa-github" aria-hidden="true" />
                            </a>
                          </div>
                        </Card.Body>
                      </Card>
                    </Accordion>
                  </Tilt>
                </div>
              </Col>
              {/*IMAGE CAPTIONING*/}

              <Col>
                <div className="d-flex justify-content-between flex-column mt-1">
                  <Tilt options={{ max: 5 }}>
                    <Accordion>
                      <Card style={{ background: "transparent" }}>
                        <Card.Header
                          as="h5"
                          className="d-flex justify-content-center flex-wrap"
                        >
                          <Card.Title className="heading justify-content-center">
                            Image Captioning
                          </Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center style d-flex justify-content-center flex-column">
                          <div>
                            <Card.Img
                              variant="top"
                              className="img-resize"
                              src={Limage}
                              alt="imagecap"
                            />
                          </div>

                          <div>
                            <Card.Text className="text-center style">
                              <Card.Header>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey="0"
                                >
                                  <div className="justify-content-center">
                                    {" "}
                                    Project Description{" "}
                                  </div>
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse
                                eventKey="0"
                                className="proj-des text-left"
                              >
                                <Card.Body>
                                  <strong>Description:</strong> This deep
                                  learning based model generates
                                  captions/descriptions for images.
                                  <hr />
                                  <strong>Features:</strong>
                                  <ul className="list-styles pt-1">
                                    <li>
                                      Model consists of Encoder, Sequence
                                      Processor and Decoder
                                    </li>
                                    <li>
                                      Evaluated the model using BLEU scores{" "}
                                    </li>
                                  </ul>
                                  <hr />
                                  <strong>Tech used:</strong>
                                  <ul>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={Lpython}
                                          alt="Python"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        Python
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={Ltensor}
                                          alt="Tensor"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        TensorFlow
                                      </span>
                                    </li>
                                  </ul>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card.Text>
                          </div>
                          <div className="d-flex justify-content-center text-center">
                            <a
                              href="https://github.com/uditjaitly/image-captioning/blob/master/image-captioning.pdf"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fab fa-github" aria-hidden="true" />
                            </a>
                          </div>
                        </Card.Body>
                      </Card>
                    </Accordion>
                  </Tilt>
                </div>
              </Col>
            </Row>
            <Row>
              {/*TO DO APP*/}

              <Col>
                <div className="d-flex justify-content-between flex-column mt-1">
                  <Tilt options={{ max: 5 }}>
                    <Accordion>
                      <Card style={{ background: "transparent" }}>
                        <Card.Header
                          as="h5"
                          className="d-flex justify-content-center flex-wrap"
                        >
                          <Card.Title className="heading justify-content-center">
                            To-Do
                          </Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center style d-flex justify-content-center flex-column">
                          <div>
                            <Card.Img
                              variant="top"
                              className="img-resize"
                              src={Ltodo}
                              alt="smart cab"
                            />
                          </div>

                          <div>
                            <Card.Text className="text-center style">
                              <Card.Header>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey="0"
                                >
                                  <div className="justify-content-center">
                                    {" "}
                                    Project Description{" "}
                                  </div>
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse
                                eventKey="0"
                                className="proj-des text-left"
                              >
                                <Card.Body>
                                  <strong>Description:</strong> Web based To-Do
                                  application
                                  <hr />
                                  <strong>Features:</strong>
                                  <ul className="list-styles pt-1">
                                    <li>Full functionality provided to user</li>
                                    <li>Backend supports data retrieval </li>
                                  </ul>
                                  <hr />
                                  <strong>Tech used:</strong>
                                  <ul>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={Lnodejs}
                                          alt="Nodejs"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        Node.js
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={Lhtml}
                                          alt="Html"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        HTML
                                      </span>
                                    </li>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={Lcss}
                                          alt="css"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        CSS
                                      </span>
                                    </li>
                                  </ul>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card.Text>
                          </div>
                          <div className="d-flex justify-content-center text-center">
                            <a
                              href="https://github.com/uditjaitly"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fab fa-github" aria-hidden="true" />
                            </a>
                          </div>
                        </Card.Body>
                      </Card>
                    </Accordion>
                  </Tilt>
                </div>
              </Col>
              <Col>
                <div className="d-flex justify-content-between flex-column mt-1">
                  <Tilt options={{ max: 5 }}>
                    <Accordion>
                      <Card style={{ background: "transparent" }}>
                        <Card.Header
                          as="h5"
                          className="d-flex justify-content-center flex-wrap"
                        >
                          <Card.Title className="heading justify-content-center">
                            Red Black Tree
                          </Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center style d-flex justify-content-center flex-column">
                          <div>
                            <Card.Img
                              variant="top"
                              className="img-resize"
                              src={LRBT}
                              alt="RBT"
                            />
                          </div>

                          <div>
                            <Card.Text className="text-center style">
                              <Card.Header>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey="0"
                                >
                                  <div className="justify-content-center">
                                    {" "}
                                    Project Description{" "}
                                  </div>
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse
                                eventKey="0"
                                className="proj-des text-left"
                              >
                                <Card.Body>
                                  <strong>Description:</strong> Implemented Red
                                  Black Tree in C++
                                  <hr />
                                  <strong>Features:</strong>
                                  <ul className="list-styles pt-1">
                                    <li>Solved a complex problem using RBT</li>
                                    <li>
                                      Achieved significant decrease in time and
                                      space complexity as compared to basic data
                                      structures{" "}
                                    </li>
                                  </ul>
                                  <hr />
                                  <strong>Tech used:</strong>
                                  <ul>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={Lc}
                                          alt="C++"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        C++
                                      </span>
                                    </li>
                                  </ul>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card.Text>
                          </div>
                          <div className="d-flex justify-content-center text-center">
                            <a
                              href="https://github.com/uditjaitly/red-black-tree-cpp"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fab fa-github" aria-hidden="true" />
                            </a>
                          </div>
                        </Card.Body>
                      </Card>
                    </Accordion>
                  </Tilt>
                </div>
              </Col>
              <Col>
                <div className="d-flex justify-content-between flex-column mt-1">
                  <Tilt options={{ max: 5 }}>
                    <Accordion>
                      <Card style={{ background: "transparent" }}>
                        <Card.Header
                          as="h5"
                          className="d-flex justify-content-center flex-wrap text-center"
                        >
                          <Card.Title className="heading justify-content-center">
                            Network Streaming Algorithms
                          </Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center style d-flex justify-content-center flex-column">
                          <div>
                            <Card.Img
                              variant="top"
                              className="img-resize"
                              src={Lnds}
                              alt="nds"
                            />
                          </div>

                          <div>
                            <Card.Text className="text-center style">
                              <Card.Header>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey="0"
                                >
                                  <div className="justify-content-center">
                                    {" "}
                                    Project Description{" "}
                                  </div>
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse
                                eventKey="0"
                                className="proj-des text-left"
                              >
                                <Card.Body>
                                  <strong>Description:</strong> Implementation
                                  of various data streaming algorithms in C++
                                  <hr />
                                  <strong>Features:</strong>
                                  <ul className="list-styles pt-1">
                                    <li>
                                      Hashing algorithms like D-Left, Cuckoo{" "}
                                    </li>
                                    <li>Coded and Counting bloom filters </li>
                                    <li>Counter and Count Min Sketch </li>
                                  </ul>
                                  <hr />
                                  <strong>Tech used:</strong>
                                  <ul>
                                    <li>
                                      <span className="p-2">
                                        <Image
                                          src={Lc}
                                          alt="c++"
                                          rounded
                                          className="image-style m-1"
                                        ></Image>{" "}
                                        C++
                                      </span>
                                    </li>
                                  </ul>
                                </Card.Body>
                              </Accordion.Collapse>
                              <div className="d-flex justify-content-center text-center">
                                <a
                                  href="https://github.com/uditjaitly/NDS-NetworkDataStreaming-"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  <i
                                    className="fab fa-github"
                                    aria-hidden="true"
                                  />
                                </a>
                              </div>
                            </Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
                    </Accordion>
                  </Tilt>
                </div>
              </Col>
            </Row>
          </Container>
        </CardDeck>
      </Jumbotron>
    </div>
  );
};

export default Projects;
