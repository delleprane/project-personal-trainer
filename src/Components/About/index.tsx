import { Button } from "../Button"
import {buttonTitleFreeClass, messageFreeClass} from "../../Utils/Messages"
import { persona } from "../../Utils/Texts"

import "./About.css"

export function About() {
    return (
        <div id="about" className="about">
            <div className="about-container">
                <div className="image">
                    <img className="logo" src="images/principal-image.png" alt="Ana Carolina Image" />
                </div>
                <div className="info">
                    <h1>{persona.title}</h1>
                    <p>{persona.content}</p>
                    <Button content={buttonTitleFreeClass} message={messageFreeClass} />
                </div>
            </div>
        </div>
    )
}