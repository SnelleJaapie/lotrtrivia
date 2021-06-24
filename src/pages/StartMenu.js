import React, {useContext} from "react";
import {
    Link,
    NavLink,
} from "react-router-dom";
import {Howl} from "howler";
import swordSFX from "../audioclips/SwordPullOut.mp3"
import swordDraw from "../audioclips/swordDraw.mp3"
import {AnimatePresence, motion} from 'framer-motion'
import {nameAvatarContext} from "../App";
import {soundContext} from "../App";

export default function StartMenu() {

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

    const nameAvatarValue = useContext(nameAvatarContext)
    const soundToggleMute = useContext(soundContext)

    return (
        <>
            <motion.div
                initial={{scaleX: 0, scaleY: 0}}
                animate={{scaleX: 1, scaleY: 1}}
                exit={{scaleX: 0, scaleY: 0}}

            >
                <div className="StartMenuButtons">
                    <NavLink to="/InputPage">
                        <motion.div whileHover={{scale: 1.1}}>
                            <button className="mainButtonStyling" onClick={() => {
                                {
                                    soundToggleMute.sound && sound1.play()
                                }
                            }}>New Game
                            </button>
                        </motion.div>
                    </NavLink>

                    <Link to="/OptionsPage">
                        <motion.div whileHover={{scale: 1.1}}>
                            <button className="mainButtonStyling" onClick={() => {
                                {
                                    soundToggleMute.sound && sound1.play()
                                }
                            }}>Options
                            </button>
                        </motion.div>
                    </Link>

                    <Link to="/Highscore">
                        <motion.div whileHover={{scale: 1.1}}>
                            <button className="mainButtonStyling" onClick={() => {
                                {
                                    soundToggleMute.sound && sound1.play()
                                }
                            }}>Highscore
                            </button>
                        </motion.div>
                    </Link>
                </div>
            </motion.div>
        </>
    )
}