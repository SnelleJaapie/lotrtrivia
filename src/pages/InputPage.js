import React, {createContext, useContext} from 'react'
import {
    Route,
    Link,
    NavLink,
} from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion'
import {Howl} from "howler";
import swordDraw from "../audioclips/swordDraw.mp3";
import swordSFX from "../audioclips/SwordPullOut.mp3"
import Gollum from '../assets/Gollum.png'
import {soundContext} from "../App";
import {nameAvatarContext} from '../App'


export default function InputPage(props) {
    const nameAvatarValue = useContext(nameAvatarContext)
    const soundToggleMute = useContext(soundContext)

    const sound1 = new Howl({
        src: [swordSFX],
        autoplay: false,
        volume: 0.2,

    })

    const sound2 = new Howl({
        src: [swordDraw],
        autoplay: false,
        volume: 0.2,

    })


    return (
        <motion.div
            initial={{scaleY: 0}}
            animate={{scaleY: 1}}
            exit={{scaleY: 0}}
        >
            <div className="">

                <div className="InputPageSelectInput">
                    <label className="generalTextStyling">Enter Your Playername</label>
                    <input className="mainInputStyling" value={nameAvatarValue.name}
                           onChange={(event) => nameAvatarValue.setName(event.target.value)}/>
                </div>


                <div className="InputPageSelectInput">
                    <motion
                        initial={{scaleY: 0}}
                        animate={{scaleY: 1}}
                        exit={{scaleY: 0}}
                    >
                        <label className="generalTextStyling">Select Your Avatar</label>
                        <select className="mainInputStyling" name="avaterMenu" value={nameAvatarValue.avatar}
                                onChange={(event) => nameAvatarValue.setAvatar(event.target.value)}>
                            <option id={"emoji1"}>Gollum</option>
                            <option id={"emoji2"}>😂</option>
                            <option id={"emoji3"}>😎</option>
                            <option id={"emoji4"}>✌</option>
                        </select>
                    </motion>
                </div>


                <div className="InputPageNavButtons">
                    <Link to="/">
                        <motion.div whileHover={{scale: 1.1}}>
                            <button className="mainButtonStyling" onClick={() => {
                                {
                                    soundToggleMute.sound && sound2.play()
                                }
                            }}>Back
                            </button>
                        </motion.div>
                    </Link>

                    <NavLink to="/Quiz">
                        <motion.div whileHover={{scale: 1.1}}>
                            <button className="mainButtonStyling" onClick={() => {
                                {
                                    soundToggleMute.sound && sound1.play()
                                }
                            }}>Playerset
                            </button>
                        </motion.div>
                    </NavLink>
                </div>
            </div>
        </motion.div>
    )
}

