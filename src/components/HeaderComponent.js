import React, { Component } from 'react';
import { Navbar, Nav, Container, } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import HomeComponent from '../components/HomeComponent';
import VaccineComponent from '../components/VaccineComponent';
import AboutComponent from '../components/AboutComponent';
import ContactComponent from '../components/ContactComponent';
import SignupComponent from '../components/SignupComponent';


export default class HeaderComponent extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="m-auto">
                                    <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
                                    <Nav.Link as={Link} to={'/vaccine'}>Vaccine registration</Nav.Link>
                                    <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                                    <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
                                    <Nav.Link as={Link} to={'/signup'}>Sign Up</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                    <Route path="/home">
                            <HomeComponent />
                        </Route>
                        <Route path="/vaccine">
                            <VaccineComponent />
                        </Route>
                        <Route path="/about">
                            <AboutComponent />
                        </Route>
                        <Route path="/contact">
                            <ContactComponent />
                        </Route>
                        <Route path="/signup">
                            <SignupComponent />
                        </Route>
                        <Route path="/">
                            <HomeComponent />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}