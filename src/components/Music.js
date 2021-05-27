import React, {Component} from "react";
import {Button} from "react-bootstrap";
import './MusicStyles.css'


export default class Music extends Component {
    render() {
        return (
            <div>
                <h1 cl> Checkout our Music</h1>
                <a href="https://music.apple.com/us/artist/uncommonwealth/1558615276" className="MusicLink">Apple Music </a>
            </div>

        )
    }
}