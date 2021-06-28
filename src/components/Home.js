import React, {Component} from "react";
import {Button} from "react-bootstrap";
import './Styles.css'
import bandmembers from "../bandmembers.jpg";


export default class Home extends Component {
    render() {
        return (
            // <div className="Text"> Home Text </div>
            <img src={bandmembers} className="MainImage my-auto"/>
        )
    }
}