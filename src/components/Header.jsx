import React from "react";

const Header = ({ TotalQuestions, dispatch }) => {
  return (
    <div className="header-container main">
      <div className="header-section">
        <h1 className="heading">✨ React Project Quiz 💡</h1>
        <div className="header-text">
          <h1>❤️‍🩹 Welcome to this quiz 💝</h1>
          <h2>👦Tell about Me 🙈</h2>
          <p>Total Questions:- {TotalQuestions}</p>
          <button onClick={() => dispatch({ type: "start" })} className="btn">
            😍 Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
