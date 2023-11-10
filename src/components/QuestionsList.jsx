import React from "react";
import NextButton from "./NextButton";
function QuestionsList({
  Ques,
  answer,
  dispatch,
  index,
  allQuestions,
  TotalPoints,
  points,
}) {
  function UpdateNewAnswer(index) {
    dispatch({ type: "newAnswer", payload: index });

    if (index === Ques.correctOption - 1) {
      dispatch({ type: "correctPoints", payload: points + Ques.points });
    }
  }
  const hasAnswer = answer !== null;
  return (
    <div className="question-list-Container">
      <div className="progress">
        <progress max={allQuestions.length} value={index + 1}></progress>
      </div>

      <div className="question-list-output">
        <p>
          Question {index + 1} / {allQuestions.length}
        </p>
        <p>
          {points} / {TotalPoints}
        </p>
      </div>
      <h2>{Ques.question}</h2>
      <ul className="question-list">
        {Ques.options.map((data, index) => {
          return (
            <button
              className={`mylistbtn btn ${index === answer ? "check" : ""} ${
                hasAnswer
                  ? index === Ques.correctOption - 1
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
              key={index}
              onClick={() => UpdateNewAnswer(index)}
              disabled={hasAnswer}
            >
              {data}
            </button>
          );
        })}
      </ul>
      {hasAnswer && (
        <NextButton
          dispatch={dispatch}
          index={index}
          allQuestions={allQuestions}
        ></NextButton>
      )}
    </div>
  );
}

export default QuestionsList;
