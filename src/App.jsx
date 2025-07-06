import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import res from "./response.json";

function App() {
    const [quiz, setQuiz] = useState([]);

    // fetch(
    //     "https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple"
    // )
    //     .then((res) => res.json())
    //     .then((data) => console.log(datares));
    // console.log(res.results);

    // console.log(quiz);
    useEffect(() => {
        setQuiz(() => res.results);
    }, []);
    useEffect(() => {
        console.log(quiz);
    }, [quiz]);
    return (
        <>
            <div>
                <h2>Quizzical</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                <button id="start">Start Game</button>
            </div>
        </>
    );
}

export default App;
