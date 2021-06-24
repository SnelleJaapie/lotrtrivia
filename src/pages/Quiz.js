import React, {useContext, createContext} from 'react'
import App from "../App";
import axios from "axios";
import {
    NavLink
} from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion'
import {nameAvatarContext} from '../App'
import {soundContext} from "../App";


const apiKey = 'PQhSLtNXHWFFaBqgDe0y'

export default function Quiz(props) {
    const [quote, setQuote] = React.useState()
    const [character, setCharacter] = React.useState();
    const [counstScore, setCountScore] = React.useState();

    React.useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        }
        const fetchData = async () => {
            const rawQuotes = await fetch('https://the-one-api.dev/v2/quote', {
                headers: headers
            })
            const quotes = await rawQuotes.json();
            const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
            setQuote(quote.dialog)
            const rawCharacters = await fetch('https://the-one-api.dev/v2/character?_id=' + quote.character, {headers: headers})
            const characters = await rawCharacters.json();
            const character = characters.docs[0];
            setCharacter(character.name)
            console.log(rawQuotes, rawCharacters)
        };

        fetchData();
    }, []);


    const [score, setScore] = React.useState(0);
    const [showFact, setShowFact] = React.useState(true);
    const nameAvatarValue = useContext(nameAvatarContext);
    const soundToggleMute = useContext(soundContext)


    const facts = [
        {
            fact: <div>
                {nameAvatarValue.name} {nameAvatarValue.avatar}
            </div>
        },
        {fact: "Fact2"},
        {fact: "Fact3"},
        {fact: "Fact4"},
    ]

    const questions = [
        {
            questionText:
                <div>
                    <motion.div
                        initial={{scaleY: 0}}
                        animate={{scaleY: 1}}
                        exit={{scaleY: 0}}
                    >
                        <h2>In LOTR, what does 'Golem' say when he freaks out again?</h2>
                        <button onClick={() => setShowFact(true)}>ShowFact</button>
                    </motion.div>
                </div>,
            answerOptions: [
                {answerText: "FCKING HELP", isCorrect: true},
                {answerText: "IM DYING", isCorrect: false},
                {answerText: "GOLEM", isCorrect: false},
                {answerText: "FILTHY HOBBITS", isCorrect: false},

            ]
        },
        {
            questionText: <div>
                <h2>Thi sis question #2</h2>
                <button onClick={() => setShowFact(true)}>ShowFact</button>
            </div>,
            answerOptions: [
                {answerText: "answer #1", isCorrect: false},
                {answerText: "answer #2", isCorrect: true},
                {answerText: "answer #3", isCorrect: false},
                {answerText: "answer #4", isCorrect: false},
            ]
        },
        {
            questionText: <div>
                <h2>This is question #3</h2>
                <button onClick={() => setShowFact(true)}>ShowFact</button>
            </div>,
            answerOptions: [
                {answerText: "Answer 1", isCorrect: false},
                {answerText: "Answer 2", isCorrect: false},
                {answerText: "Answer 3", isCorrect: true},
                {answerText: "Answer 4", isCorrect: false},
            ]
        },
        {
            questionText: <div>
                <blockquote>{quote}</blockquote>
                <cite>- {character}</cite>
                <button onClick={() => setShowFact(true)}>ShowFact</button>
            </div>,
            answerOptions: [
                {answerText: "Answer 1", isCorrect: false},
                {answerText: "Answer 2", isCorrect: false},
                {answerText: "Answer 3", isCorrect: false},
                {answerText: "Answer 4", isCorrect: true},
            ]
        },
    ]


    const [currentQuestion, setCurrentQuestion] = React.useState(0);

    const [showScore, setShowScore] = React.useState(false);


    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 10);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
        setCurrentQuestion(nextQuestion);

        if (nextQuestion < facts.length) {
            setShowFact(true)
        } else {
            setShowFact(false)
        }

    }

     const ezWin = () => {
        if (nameAvatarValue.name === "Novi") {
            setShowScore(true)
        }
    }


    return (
        <>
            <motion.div
                initial={{scaleY: 0}}
                animate={{scaleY: 1}}
                exit={{scaleY: 0}}
            >
                <div className="randomFact">
                    {showFact ? (<>
                            <div className="question-text">{facts[currentQuestion].fact}</div>
                            <button onClick={() => setShowFact(false)}>showQuestion</button>
                        </>
                    ) : (
                        <div className="app">
                            {showScore ? (
                                <>
                                    <h1>{nameAvatarValue.name}{nameAvatarValue.avatar}</h1>
                                    <p id='scoreEnding' className="score-section">You scored {score} out
                                        of {questions.length * 10} points!</p>
                                    <NavLink to="/">
                                        <button className="mainButtonStyling">back</button>
                                    </NavLink>
                                </>

                            ) : (
                                <>
                                    <div className="facts-section">

                                    </div>
                                    <div className="question-section">
                                        <div className="scoreAndLives">
                                            <h1 id="playerNameStyling">{nameAvatarValue.name}{nameAvatarValue.avatar}</h1>
                                            <p><h1 id="livesStyling">Lives: N.A. </h1></p>
                                            <p><h1 id="scoreStyling">Score: {score}</h1></p>
                                        </div>
                                        <div className="question-count">
                                            <span
                                                style={{fontSize: 35}}>Question {currentQuestion + 1}/{questions.length}</span>
                                        </div>
                                        <div className="question-text">{questions[currentQuestion].questionText}</div>
                                    </div>
                                    <div className="answer-section">
                                        {questions[currentQuestion].answerOptions.map((answerOption) =>
                                            <button className="quizButtonStyling"
                                                    onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)}
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>

            </motion.div>
        </>

    )
}