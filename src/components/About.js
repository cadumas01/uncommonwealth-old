import React, {Component} from "react";
import {Button, Jumbotron} from "react-bootstrap";
import './Styles.css'



export default class About extends Component {
    render() {
        return (
            <Jumbotron className="Jumbotron">
                <h1> About </h1>
                <p style={{marginTop: "1.5%"}}> Uncommonwealth is a key player in bringing rock back to the forefront of the college music scene.
                    Started by 6 Boston College students in Fall 2020, Uncommonwealth quickly evolved from performing covers to writing their own music,
                    drawing from a variety of influences including 90's alternative, modern indie-rock and the blues.
                </p>
                <p style={{padding: "1%", backgroundColor: "var(--rich-black-fogra-29)"}}>
                    <h4 className="Bold"> The Roster </h4>
                    <div style={{}}>
                        <p style={{fontStyle:"italic"}}>
                            Ben Austen - Vocals, rhythm guitar
                        </p>
                        <p style={{fontStyle:"italic"}} >
                            Tommy Lynn - Lead guitar, vocals
                        </p>
                        <p style={{fontStyle:"italic"}}>
                            Cole Dumas - Guitar, vocals
                        </p>
                        <p style={{fontStyle:"italic"}} >
                            AJ Morgan - Drums
                        </p>
                        <p style={{fontStyle:"italic"}}>
                            Spencer Bono - Bass
                        </p>
                        <p style={{fontStyle:"italic"}} >
                            Michael Vaquero - Keyboard
                        </p>

                    </div>
                </p>
            </Jumbotron>

        )
    }
}