import React, {useState} from "react"
import "./App.css";

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    console.log("good +1")
    setGood(good+1)
  }

  const handleNeutral = () => {
    console.log("Neutral +1")
    setNeutral(neutral+1)
  }

  const handleBad = () => {
    console.log("Bad +1")
    setBad(bad+1)
  }

  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <button onClick={() => handleGood()}>Good</button>
      <button onClick={() => handleNeutral()}>Neutral</button>
      <button onClick={() => handleBad()}>Bad</button>
      <h2>Statitics</h2>
      <p><b>good</b> {good}</p>
      <p><b>neutral</b> {neutral}</p>
      <p><b>bad</b> {bad}</p>
      <p><b>All</b> {good+neutral+bad}</p>
      <p><b>Average</b> {(good-bad)/(good+bad+neutral)}</p>
      <p><b>Positive</b>{good/(good+bad+neutral)*100}</p>
    </div>
  );
}

export default App;
