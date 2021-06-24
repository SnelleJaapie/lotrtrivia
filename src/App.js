import React, {useContext, createContext} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'

import StartMenu from "./pages/StartMenu"
import Inputpage from "./pages/InputPage";
import OptionsPage from "./pages/OptionsPage";
import Quiz from "./pages/Quiz"
import Highscore from "./pages/HighscorePage";


export const nameAvatarContext = createContext()
export const soundContext = createContext()

export default function App() {
    const [name, setName] = React.useState("")
    const [avatar, setAvatar] = React.useState("")
    const [sound, setSound] = React.useState(true)

    return (

        <div className="Root">
            <div className="startMenuDiv">

                <div className="backgroundcss">

                </div>


                <Router>
                    <soundContext.Provider value={{sound, setSound}}>
                        <nameAvatarContext.Provider value={{name, setName, avatar, setAvatar}}>
                            <AnimatePresence exitBeforeEnter>
                                <Switch>
                                    <Route exact path="/">
                                        <StartMenu/>
                                    </Route>

                                    <Route path="/Quiz">
                                        <Quiz/>
                                    </Route>

                                    <Route path="/Highscore">
                                        <Highscore/>
                                    </Route>

                                    <Route path="/InputPage">
                                        <Inputpage/>
                                    </Route>

                                    <Route path="/OptionsPage">
                                        <OptionsPage/>
                                    </Route>
                                </Switch>
                            </AnimatePresence>
                        </nameAvatarContext.Provider>
                    </soundContext.Provider>
                </Router>

            </div>
        </div>
    )
        ;
}

