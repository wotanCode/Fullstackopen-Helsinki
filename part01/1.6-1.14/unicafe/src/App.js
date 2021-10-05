import React, {useState} from "react"
import "./App.css";

const Statistics = (props) => {
  //Destructuramos el props
  const {nombre, calculo} = props
  return(
  <>
    <p><b>{nombre}</b> {calculo}</p>
  </>
  );
}

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
      <Statistics nombre="Good" calculo={good}/>
      <Statistics nombre="Neutral" calculo={neutral}/>
      <Statistics nombre="Bad" calculo={bad}/>
      <Statistics nombre="All" calculo={good+neutral+bad}/>
      <Statistics nombre="Average" calculo={(good-bad)/(good+bad+neutral)}/>
      <Statistics nombre="Positive" calculo={good/(good+bad+neutral)*100}/>
    </div>
  );
}

export default App;
