import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Question from "./components/Question";
import res from "./components/res.json";

function App() {
    console.log("Loaded res.json:", res);
    const [quiz, setQuiz] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [gameStart, setGameStart] = useState(false);

    useEffect(() => {
        // fetch(
        //     "https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple"
        // )
        //     .then((res) => (res.ok ? res.json() :))
        //     .then((data) => setQuiz(data.results))
        //     .catch((err) =>
        //         console.error("Error fetching data from API: ", err)
        //     );
        if (Array.isArray(res)) {
            setQuiz(res); // ✅ your file is just an array — use it directly
        } else if (res && Array.isArray(res.results)) {
            setQuiz(res.results);
        } else {
            console.error("Invalid res.json format:", res);
            setQuiz([]);
        }
    }, []);
    function startGame() {
        setGameStart((prev) => !prev);
    }
    const [selectedAnswers, setSelectedAnswers] = useState({});
    function handleSelect(q, a) {
        setSelectedAnswers((p) => ({ ...p, [q]: a }));
    }
    console.log(selectedAnswers);
    function submitAnswers() {
        let rightAns = {};
        quiz.forEach((x, idx) => {
            rightAns = { ...rightAns, [idx]: x.correct_answer };
        });
        setGameOver((prev) => !prev);
        console.log("e");
    }
    return (
        <>
            {!gameStart ? (
                <div className="startDiv">
                    <h2>Quizzical</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                    <button onClick={startGame}>Start Game</button>
                </div>
            ) : null}
            {gameStart ? (
                <div className="quizDiv">
                    {gameStart &&
                        Array.isArray(quiz) &&
                        quiz.map((question, index) => (
                            <Question
                                key={index}
                                qObj={question}
                                qNo={index}
                                handleSelect={handleSelect}
                                isOver={gameOver}
                            />
                        ))}
                    <button onClick={submitAnswers} type="button">
                        Check Answers
                    </button>
                </div>
            ) : null}
        </>
    );
}

export default App;
