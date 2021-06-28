import React, {Component} from "react";
import {Button, Container, Row, Col, Jumbotron} from "react-bootstrap";
import './Styles.css'
import instagram from '../instagramIcon.png'
import facebook from '../facebookIcon.png'



export default class About extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <a href="https://www.instagram.com/uncommonwealthband/?hl=en" className="">
                            <img src={instagram} className={"FooterIcon"} />
                        </a>
                        <a href="https://www.facebook.com/Uncommonwealth-107989844704141" className="">
                            <img src={facebook} className={"FooterIcon"} />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p4 className="Footer">
                            Uncommonwealth © 2021, All Rights Reserved.
                        </p4>
                    </Col>
                </Row>
            </Container>
        )
    }
}