import React, {Component} from "react";
import {Button, Jumbotron} from "react-bootstrap";
import './Styles.css'


export default class About extends Component {
    render() {
        return (
            <Jumbotron className="Jumbotron">
                <h1> Header 1</h1>
                <p> Some writing. yea this is writing. Some writing
                    Some writing. yea this is writing. Some writing sdgsDG
                </p>

            </Jumbotron>

        )
    }
}