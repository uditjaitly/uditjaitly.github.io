import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./mynavbar.style.css"
import useDarkMode from 'use-dark-mode';
import DarkModeToggle from "react-dark-mode-toggle";

import { InputGroup } from 'react-bootstrap'
const MyNavbar = () => {
    const darkMode = useDarkMode(false);
    return (
        <div>
       
            <Navbar fixed='top' collapseOnSelect expand="md"  variant="dark" className="animate-navbar nav-theme justify-content-between">
        <Navbar.Brand href="/">
        <h3 className="logo-udit">&lt;udit</h3>
        <h3 className="logo-jaitly">jaitly</h3>
        <h3 className="logo-udit">/&gt;</h3>
        
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            <InputGroup><div className="icon-container-toggle"><DarkModeToggle checked={darkMode.value} onChange={darkMode.toggle} size={70}/></div></InputGroup>
            <Nav.Link className="nav-title"></Nav.Link>
            <Nav.Link className="nav-title" href="/"><div className="icon-container hvr-buzz-out"><i className="fas fa-grin-beam  "></i><h3>About Me</h3></div></Nav.Link>
            <Nav.Link className="nav-title"href="/skills"><div className="icon-container hvr-buzz-out"><i className="fas fa-laptop-code"></i><h3>Skills</h3></div></Nav.Link>
            <Nav.Link className="nav-title "href="/experience"><div className="icon-container hvr-buzz-out "><i className="fas fa-briefcase "></i><h3 className="d-flex justify-content-center flex-wrap text-center">Experience</h3></div></Nav.Link>
            <Nav.Link className="nav-title"href="/projects"><div className="icon-container hvr-buzz-out"><i className="fas fa-tools "></i><h3>Projects</h3></div></Nav.Link>
            <Nav.Link className="nav-title"href="/contact"><div className="icon-container hvr-buzz-out"> <i className="fas fa-id-card "></i><h3>Contact</h3></div></Nav.Link>
            <Nav.Link className="nav-title"href="https://drive.google.com/file/d/1xvWyMJOiCM6y4AiofpWKpiXat7CqoWQD/view?usp=sharing" target="_blank" rel="noopener noreferrer"><div className="icon-container hvr-buzz-out"> <i className="fas fa-file-alt "></i><h3>Resume</h3></div></Nav.Link>

           
            
            </Nav>
            
        </Navbar.Collapse>
        </Navbar>
        </div>
    )
}
export default MyNavbar