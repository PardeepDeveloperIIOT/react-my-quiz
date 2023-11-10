import React from "react";

const NextButton = ({ dispatch, index, allQuestions }) => {
  if (index < allQuestions.length - 1)
    return (
      <div>
        <div>
          <div className="nextbtn">
            <button
              onClick={() =>
                dispatch({ type: "nextQuestion", payload: index + 1 })
              }
              className="btn"
            >
              Next 👉
            </button>
          </div>
        </div>
      </div>
    );
  if (index === allQuestions.length - 1) {
    return (
      <div>
        <div>
          <div className="nextbtn">
            <button
              onClick={(e) => dispatch({ type: "finished" })}
              className="btn"
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default NextButton;
