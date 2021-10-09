import React, {useState} from "react"
import "./App.css";

//componente para el boton que revise el nombre del boton y la funcion como props
const Button = (props) => {
  const {text, handle} = props
  return(
    <button onClick={() => {handle()}}>{text}</button>
  )
}


const Statistics = (props) => {
  //Destructuramos el props
  const {nomensaje, good, neutral, bad} = props
  if (nomensaje === true){
    return(
      <>
        <h2>No Feedback given</h2>
      </>
    )
  } else {
    return(
    <>
      <table>
        <tbody>
          <Statistic nombre="Good" calculo={good}/>
          <Statistic nombre="Neutral" calculo={neutral}/>
          <Statistic nombre="Bad" calculo={bad}/>
          <Statistic nombre="All" calculo={good+neutral+bad}/>
          <Statistic nombre="Average" calculo={(good-bad)/(good+bad+neutral)}/>
          <Statistic nombre="Positive" calculo={good/(good+bad+neutral)*100}/>
        </tbody>
      </table>
    </>
    )
  }
}

//Aqui lo hice sin desestructurar el componente
const Statistic = (props) => {
  return(
    <tr>
      <td><b>{props.nombre}</b></td>
      <td>{props.calculo}</td>
    </tr>
  )
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
      <Button text="Good" handle={handleGood}/>
      <Button text="Neutral" handle={handleNeutral}/>
      <Button text="Bad" handle={handleBad}/>

      <h2>Statitics</h2>
      {/* Usamos el operador terneario para verificar, el ? es la consulta y el : es el ELSE */}
      {good+neutral+bad === 0 ?
        <Statistics nomensaje={true}/>
      :
        <>
        
          <Statistics good={good} neutral={neutral} bad={bad}/>
        </>
      }
    </div>
  );
}

export default App;