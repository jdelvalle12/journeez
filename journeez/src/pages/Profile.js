import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


export default function Profile() {

    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Travel App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#planner">Planner</Nav.Link>
            <Nav.Link href="#journal">Journal</Nav.Link>
            <Nav.Link href="#photos">Photos</Nav.Link>
            <Nav.Link href="#budget">Budget</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    ) ;
}