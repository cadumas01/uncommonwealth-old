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
                        <h1 className="Bold Text"> Uncommonwealth </h1>
                    </Col>
                    <Col className="Col col-md-6 my-auto">
                        <Navbar className="NavBar ">
                            <Nav>
                                <Nav.Item
                                    className=''>
                                    <Nav.Link >
                                        <Link className="Text Bold" to="/">HOME</Link>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <Link className="Text Bold" to="/music">MUSIC</Link>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <Link className="Text Bold" to="/about">ABOUT</Link>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <Link className="Text Bold" to="/shop">SHOP</Link>
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