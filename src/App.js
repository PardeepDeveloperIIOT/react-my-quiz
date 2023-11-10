import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Mydata from "./components/data";
import Questions from "./components/Questions";
import FinishScreen from "./components/FinishScreen";

const startingDefaultData = {
  Ques: [],
  status: "Loading", //Loading, ready,error,  start
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceive":
      return { ...state, status: "Ready", Ques: action.payload };
    case "CheckingData":
      return { ...state, status: "Loading" };
    case "failed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      return {
        ...state,
        answer: action.payload,
      };
    case "nextQuestion":
      return {
        ...state,
        index: action.payload,
        answer: null,
      };
    case "correctPoints":
      return { ...state, points: action.payload };
    case "finished":
      return { ...state, status: "finish" };
    case "resetdata":
      return { ...state, status: "Ready", answer: null, points: 0, index: 0 };
    default:
      throw new Error("Somthing default");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, startingDefaultData);

  const { Ques, status, index, answer, points } = state;
  const TotalQuestions = Ques?.length;

  const TotalPoints = Ques.reduce((prev, curt) => {
    return prev + curt.points;
  }, 0);

  useEffect(() => {
    try {
      dispatch({ type: "CheckingData" });
      const Complete_Data = Mydata.MyQuestions;
      console.log(Complete_Data);
      Complete_Data &&
        dispatch({ type: "dataReceive", payload: Complete_Data });
    } catch (error) {
      console.log("Pardeep have some error...");
      dispatch({ type: "failed" });
    }
  }, []);

  return (
    <div>
      <div className="app">
        {status === "error" && <p>Error....</p>}
        {status === "Loading" && <p>Loading....</p>}
        {status === "Ready" && (
          <Header
            status={status}
            TotalQuestions={TotalQuestions}
            dispatch={dispatch}
          ></Header>
        )}
        {status === "active" && (
          <Questions
            Ques={Ques[index]}
            answer={answer}
            dispatch={dispatch}
            index={index}
            allQuestions={Ques}
            TotalPoints={TotalPoints}
            points={points}
          ></Questions>
        )}
        {status === "finish" && (
          <FinishScreen
            TotalPoints={TotalPoints}
            points={points}
            dispatch={dispatch}
          ></FinishScreen>
        )}
      </div>
    </div>
  );
}
