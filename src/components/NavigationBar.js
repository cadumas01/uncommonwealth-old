import {Container, Nav, Navbar,Row,Col, Image} from 'react-bootstrap'
import React, {Component} from "react";
import './Styles.css'
import {Link} from "react-router-dom";
import bandmembers from '../bandmembers.jpg'


export default class NavigationBar extends Component{
    render(){
        return(
            <Container fluid className="NavigationBarContainer">
                <Row className="Row">
                    <Col className="Col col-md-6 my-auto ">
                        <img src={bandmembers} className="Icon my-auto"/>
                    </Col>
                    <Col className="Col col-md-6 my-auto">
                        <Navbar className="NavBar ">
                            <Nav>
                                <Nav.Item
                                    className=''>
                                    <Nav.Link >
                                        <Link className="Text" to="/">Home</Link>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <Link className="Text" to="/music">Music</Link>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <Link className="Text" to="/about">About</Link>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <Link className="Text" to="/shop">Shop</Link>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </Container>

        )
    }
}