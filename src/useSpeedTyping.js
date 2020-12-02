import { useEffect, useState, useRef } from "react";

const useSpeedTyping = () => {

const STARTING_TIME = 5;

  const [text, setText] = useState("");
  const [countWords, setCountWords] = useState(0);
  const [timer, setTimer] = useState(STARTING_TIME);
  const [shouldTimerStart, setShouldTimerStart] = useState(false);

  const inputRef = useRef(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const countWordsUserTyped = (text) => {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter(word => word !== "").length;
  };

  const startGame = () => {
    setShouldTimerStart(true);
    setTimer(STARTING_TIME)
    setText('')
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const endGame = () => {
    setShouldTimerStart(false);
    setCountWords(countWordsUserTyped(text));
  };

  useEffect(() => {
    if (shouldTimerStart === true) {
      setTimeout(() => {
        if (timer > 0) {
          setTimer(timer - 1);
          console.log(timer);
        }
      }, 1000);
    }
    if (timer === 0) {
      endGame();
    }
  }, [timer, shouldTimerStart]);

  return {shouldTimerStart, inputRef, handleChange, text, timer, startGame, countWords}
}

export default useSpeedTyping