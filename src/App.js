import "./App.css";
import React, { useEffect, useState } from "react";

function App() {

  const STARTING_TIME = 5

  const [text, setText] = useState("");
  const [timer, setTimer] = useState(STARTING_TIME);
  const [shouldTimerStart, setshouldTimerStart] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const startGame = () => {
    setshouldTimerStart(true);
    setTimer(STARTING_TIME)
    setText('')
    setWordCount(0)
  }

  const endGame = () => {
    setshouldTimerStart(false);
    setWordCount(calculateWordCount(text));
  }

  useEffect(
    () => {
      if (timer > 0 && shouldTimerStart === true) {
        setTimeout(() => {
          setTimer(timer - 1);
        }, 1000);
      } else if (timer === 0) {
        endGame()
      }
    },
    [timer, shouldTimerStart]
  );

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  }

  const calculateWordCount = (text) => {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea 
      disabled={!shouldTimerStart}
      onChange={handleChange} value={text}
      />
      <h4>Time remaining: {timer}</h4>
      <button
        disabled={shouldTimerStart}
        onClick={() => {
          startGame()
        }}
      >
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
