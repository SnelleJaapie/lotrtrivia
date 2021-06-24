import React, { useContext, createContext} from 'react'
import {
    Link,
} from "react-router-dom";
import {Howl} from "howler";
import swordDraw from "../audioclips/swordDraw.mp3";
import {motion} from "framer-motion";
import { nameAvatarContext } from "../App";
import { score } from './Quiz'


export default function Highscore() {
    const nameAvatarValue = useContext(nameAvatarContext)

    const sound2 = new Howl({
        src: [swordDraw],
        autoplay: false,
        volume: 0.2,

    })

    return (
        <>
            <motion.div
                initial={{scaleY: 0}}
                animate={{scaleY: 1}}
                exit={{scaleY: 0}}
            >
                <div>
                    <Link to="/">
                        <button className="mainButtonStyling" onClick={() => {
                            {
                                soundToggleMute.sound && sound2.play()
                            }
                        }}>Back
                        </button>
                    </Link>
                    <h1>{nameAvatarValue.name}: score</h1>
                    <p>Dit is de Highscore page</p>
                </div>
            </motion.div>
        </>
    )
}