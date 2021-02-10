import React , {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import './my-contact.style.css'
const Contact = () => {
    
        return(
            <div className="contact-body"  >
                <Container className="contact-grid" >
                    <Row>
                    <Col md="6">
                        <h2 className="title-contact">Udit Jaitly</h2>
                        <Row>
                        <img className="avatar justify-content-end" src="https://i.ibb.co/pWMCzrV/1602521504311-removebg-preview.png"
                        alt="avatar" style={{height: '200px'}}/>
                        </Row>

                    </Col>

                    
                    <Col md="6">
                        <h2 className="title-contact" > Contact Me</h2>
                        <hr/>
                        <div className="contact-list"   >
                            <ListGroup >
                            <ListGroup.Item className="list-group-item" style={{fontSize:'30px', fontFamily: 'Anton' , background: "transparent"}}>
                                
                                <i className="fa fa-phone-square" aria-hidden="true"></i>  +1 (352) 871-2914
                          
                            </ListGroup.Item>

                            <ListGroup.Item className="list-group-item" style={{fontSize:'30px', fontFamily: 'Anton', background: "transparent" }}>
                               
                                <i className="" aria-hidden="true"></i> 
                                <br></br>
                             
                            </ListGroup.Item>
                            
                            <ListGroup.Item className="list-group-item" style={{fontSize:'30px', fontFamily: 'Anton', background: "transparent" }}>
                               
                                <i className="fa fa-envelope" aria-hidden="true"></i>  jaitlyudit@gmail.com
                      
                            </ListGroup.Item>
                            </ListGroup>
                        </div>
                        

                    </Col>
                    </Row>
                </Container>
            </div>
        )
 
}

export default Contact;