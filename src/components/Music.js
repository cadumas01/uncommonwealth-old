import React, {Component} from "react";
import {Button, Row, Col, Container} from "react-bootstrap";
import './MusicStyles.css'
import apple_music from '../apple_music.png'
import spotify from '../spotify-logo.jpg'


export default class Music extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="MusicHeader"> Check out our Music </h1>
                    </Col>
                </Row>
                <Row className="Row">
                    <Col >
                        <div>
                            <a href="https://music.apple.com/us/artist/uncommonwealth/1558615276" className="">
                                <img src={apple_music} className="AppleMusic"/>
                            </a>
                            <a href="https://open.spotify.com/artist/2MbVR7eDiFQrtpc0R4Ox8x?si=VBVNeBbuRA-ZY3_jKsWyVg&nd=1" className="">
                                <img src={spotify} className="Spotify"/>
                            </a>
                        </div>

                    </Col>
                </Row>
            </Container>

        )
    }
}