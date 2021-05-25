import {Nav, Navbar} from 'react-bootstrap'
import React, {Component} from "react";
import './Styles.css'
import {Link} from "react-router-dom";

export default class NavigationBar extends Component{
    render(){
        return(
            <Navbar className="NavBar">
                <Nav className="Nav">
                    <Nav.Item
                        className=''>
                        <Nav.Link >
                            <Link className="Link" to="/">Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link className="Link" to="/music">Music</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link className="Link" to="/about">About</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        )
    }
}