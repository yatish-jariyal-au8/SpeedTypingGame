import "./App.css";
import useSpeedTyping from './useSpeedTyping'

function App() {
  const {shouldTimerStart, inputRef, handleChange, text, timer, startGame, countWords} = useSpeedTyping()

  return (

    <div>
      <h1>How fast do you type?</h1>
      <textarea
        disabled={!shouldTimerStart}
        ref={inputRef}
        onChange={handleChange}
        value={text}
      />
      <h4>Time remaining: {timer}</h4>
      <button disabled={shouldTimerStart} onClick={startGame}>
        Start
      </button>
      <h1>Word count: {countWords}</h1>
    </div>
  );
}

export default App;
