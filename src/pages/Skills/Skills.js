import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// skills
import { skills } from "./skills-data";

import "./skills.style.css";






const Skills = () => {
  return (
    <div className="" id="skills">
      <h1 className="title text-center">TECH SKILLS</h1>
      <div className="container">
      <CardDeck>
        <Row className="d-flex justify-content-around">
          {/* Programming Lang */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2" style={{background:"transparent"}}>
              <Card.Body>
                {/* Programming Lang */}
                <Card.Title className="text-center  card-title"  >Programming Languages</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.programming_languages.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="focus mt-2 mb-2" style={{background:"transparent"}}>
              <Card.Body>
                <Card.Title className="text-center  card-title">Cloud Technologies</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.cloud_technologies.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* cloud tech */}
          <Col md={4}>
            

            {/* web dev */}
            <Card className="focus mt-2 mb-2 " style={{background:"transparent"}}>
              <Card.Body>
                <Card.Title className="text-center  card-title">Web Development</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.web_development.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="focus mt-2 mb-2" style={{background:"transparent"}}>
              <Card.Body>
                <Card.Title className="text-center  card-title">DevOps</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.dev_ops.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            
          </Col>

          {/* Data Analysis and Machine Learning */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2" style={{background:"transparent"}}>
              <Card.Body>
                <Card.Title className="text-center  card-title">Data Analysis and Machine Learning</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.analytics_machine_learning.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}
            <Card className="focus mt-2 mb-2 " style={{background:"transparent"}}>
              <Card.Body>
                <Card.Title className="text-center  card-title">Game Development</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.game_dev.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
            
        </Row>
      </CardDeck>
      </div>
    </div>
  );
};

export default Skills;