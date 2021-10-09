import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Uint8Array(anecdotes.length));
  let random;

  //Codigo para generar un numero aleatorio
  const aleatorio = (anecdotes) => {
    console.log("Generando numero aleatorio");
    console.log("Largo del arreglo =>" + anecdotes.length);
    random = Math.floor(Math.random() * anecdotes.length);
    console.log(random);
    setSelected(random);
  };

  const votacion = () => {
    console.log("Votando la anecdota");
    console.log("Estado inicial del componente useState vote: " + vote);
    const copyArray = [...vote];
    console.log("Estado del spread operator de copyArray: " + copyArray);
    copyArray[selected] += 1;
    console.log(copyArray)
    setVote(copyArray)
  };

  return (
    <>
      <button onClick={() => aleatorio(anecdotes)}>Ver anecdota</button>
      <div>{props.anecdotes[selected]}</div>
      <div>Puntaje: {vote[selected]}</div>
      <button onClick={() => votacion()}>Votar</button>
    </>
  );
};
const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
