import React from "react";
import "./Question.css";
export default function Question({ qObj }) {
    let resArr = [...qObj.incorrect_answers, qObj.correct_answer];

    for (let i = resArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [resArr[i], resArr[j]] = [resArr[j], resArr[i]];
    }
    return (
        <div className="question">
            <p>{qObj.question}</p>
            <div className="answers">
                {resArr.map((ans, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            <input
                                type="radio"
                                id={ans}
                                name={qObj.question}
                                value={ans}
                            />
                            <label htmlFor={ans}>{ans}</label>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
}
