import React, {Component, useContext} from 'react'
import {Howl} from 'howler'
import {

    Link
} from "react-router-dom";
import swordDraw from "../audioclips/swordDraw.mp3";
import {motion} from "framer-motion"
import {soundContext} from "../App";

// GELUID GLOBAL MAKEN
// 'http://goldfirestudios.com/proj/howlerjs/sound.ogg'

const music = [
    {sound: 'http://goldfirestudios.com/proj/howlerjs/sound.mp3', label: "music"}
]


export default function OptionsPage() {
    const soundToggleMute = useContext(soundContext);
    const sound2 = new Howl({
        src: [swordDraw],
        autoplay: false,
        volume: 0.2,

    })

    function soundToggleOff() {
        soundToggleMute.setSound(false);
        console.log("Sound is set Off");
    }
    function soundToggleOn() {
        soundToggleMute.setSound(true);
        console.log("Sound is set on")
    }


    return (
        <>
            <motion.div
                initial={{scaleY: 0}}
                animate={{scaleY: 1}}
                exit={{scaleY: 0}}
            >
                {/*<button onMouseEnter={() => {*/}
                {/*    setIsHovering(true);*/}
                {/*    {soundToggleMute.sound && sound2.play()}*/}
                {/*}}*/}
                {/*        onMouseLeave={() => {*/}
                {/*            setIsHovering(false);*/}
                {/*            {soundToggleMute.sound && sound2.play()}*/}
                {/*        }}*/}
                {/*>*/}
                {/*    <button isHovering={isHovering}>*/}
                {/*        Hover over me!*/}
                {/*    </button>*/}
                {/*</button>*/}

                <div className="mainLayoutStyling">
                    <button className="quizButtonStyling" onClick={() => soundToggleOff()}>Turn sound off
                    </button>
                    <button className="quizButtonStyling" onClick={() => soundToggleOn()}>Turn sound on
                    </button>
                    <button className="mainButtonStyling" onClick={() => {
                        {
                            soundToggleMute.sound && sound2.play()
                        }
                    }}>test
                    </button>
                </div>

                <div>
                    <Link to="/">
                        <button className="mainButtonStyling" onClick={() => {
                            {
                                soundToggleMute.sound && sound2.play()
                            }
                        }}>Back
                        </button>
                    </Link>
                </div>
            </motion.div>
        </>
    )
}

