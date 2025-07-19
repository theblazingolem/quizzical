import React from "react";
import "./Question.css";
export default function Question({ qObj, qNo, handleSelect, isOver }) {
    const [resArr, setResArr] = React.useState([]);
    React.useEffect(() => {
        let arr = [...qObj.incorrect_answers, qObj.correct_answer];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        setResArr(arr);
    }, [qObj]);

    return (
        <div className="question">
            <p>{qObj.question}</p>
            <div className="answers">
                {resArr.map((opt, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            <input
                                type="radio"
                                id={opt + qNo.toString()}
                                value={opt}
                                name={qObj.question}
                                className="right"
                                onClick={() => {
                                    handleSelect(qNo + 1, opt);
                                }}
                                disabled={isOver}
                            />
                            <label
                                className={`${
                                    isOver && qObj.correct_answer == opt
                                        ? "right"
                                        : ""
                                }`}
                                htmlFor={opt + qNo.toString()}
                            >
                                {opt}
                            </label>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
}
