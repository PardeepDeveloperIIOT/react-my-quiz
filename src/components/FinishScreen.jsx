import React from "react";
import Cry from "../images/cry.gif";
import Love from "../images/love.gif";
function FinishScreen({ TotalPoints, points, dispatch }) {
  return (
    <div className="Finish main">
      <div className="Finish-screent">
        <h1 style={{ color: "yellow" }}>🎀 Result 🎊</h1>
        <h1 className="result">
          Your Got <span style={{ color: "lightgreen" }}>{points}</span> /{" "}
          <span style={{ color: "red" }}>{TotalPoints}</span> Points
        </h1>
        {points <= 40 ? (
          <img className="cry" src={Cry} alt="p"></img>
        ) : (
          <img className="cry" src={Love} alt="p"></img>
        )}
        <button onClick={() => dispatch({ type: "resetdata" })} className="btn">
          Reset
        </button>
      </div>
    </div>
  );
}

export default FinishScreen;
