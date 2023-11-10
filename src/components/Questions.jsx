import React from "react";
import QuestionsList from "./QuestionsList";

function Questions({
  Ques,
  answer,
  dispatch,
  index,
  allQuestions,
  TotalPoints,
  points,
}) {
  return (
    <div className="questions-contaioner main">
      <div className="questions-section">
        <h1>❤️‍🔥 React Quiz Start 🔥</h1>
        {console.log(Ques)}
        <QuestionsList
          Ques={Ques}
          answer={answer}
          dispatch={dispatch}
          index={index}
          allQuestions={allQuestions}
          TotalPoints={TotalPoints}
          points={points}
        ></QuestionsList>
      </div>
    </div>
  );
}

export default Questions;
