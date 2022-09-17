import React from "react"

export default function Info() {
    return (
        <div>
            <img src='rectangle.png' alt="Laura Smith"/>
            <h1>Laura Smith</h1>
            <p id="Frontend">Frontend Developer</p>
            <small id="desc-text">laurasmith.website</small>
            <button id="email">
                <span id="email-icon"></span>
                <small id="email-text">Email</small>
            </button>
            <button id="linkedin">
                <span id="linkedin-icon"></span>
                <small id="linkedin-text">LinkedIn</small>
            </button>
            <span id="background"></span>
        </div>
    )
}