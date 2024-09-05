import { Button } from "../Button"
import { FaUserFriends, FaUsers, FaVideo } from 'react-icons/fa';
import { buttonTitleModules, messagemodule } from "../../Utils/Messages"

import "./ClassesMap.css"
import { modules } from "../../Utils/Texts";


export function ClassesMap() {


    return (
        <div id="modules" className="classes-map">
            <div className="classes-map-container">
                <img className="map" src="images/classMap.png" alt="class map" />
                <div className="modules">
                    {modules.map((item =>
                        <div className={`module ${item.className}`}>
                            <div className="info">
                                <h2>
                                    {item.title}
                                </h2>
                                <p>{item.content}
                                </p>
                                <Button content={buttonTitleModules} message={`${messagemodule} ${item.type}`} />
                            </div>
                            <div className="icon">
                                {
                                    item.type === 'online' ?
                                        <FaVideo style={{ color: '#B22222' }} /> :
                                        item.type === "presencial" ? <FaUserFriends style={{ color: '#B22222' }} /> :
                                            <FaUsers style={{ color: '#B22222' }} />
                                }
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}