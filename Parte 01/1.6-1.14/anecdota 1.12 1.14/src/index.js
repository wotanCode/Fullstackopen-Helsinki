import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length));
  const [mostvoted, setMostvoted] = useState({
    cita: "",
    puntaje: [],
  });
  // const [mostvoted, setMostvoted] = useState("")

  //Codigo para generar un numero aleatorio
  const aleatorio = (anecdotes) => {
    console.log("Generando numero aleatorio");
    //El numero aleatorio tendra por maximo valor el largo del arreglo
    let random = Math.floor(Math.random() * anecdotes.length);
    console.log("El numero aleatorio fue: " + random);
    setSelected(random);
  };

  const votacion = () => {
    console.log("Votando la anecdota");
    console.log("Estado inicial del componente useState points: " + points);
    //Usamos el operador spread para crear una copia del arreglo
    const copyArray = [...points];
    //Para comprobar que la copia es igual: console.log("Estado del spread operator de copyArray: " + copyArray);
    //Le aumentamos la posicion exacta a esa posicion
    copyArray[selected] += 1;
    //Valor del nuevo arreglo
    console.log("El valor del nuevo arreglo es: " + copyArray);
    //Aqui creo el nuevo arreglo para vote
    setPoints(copyArray);

    const auxmaxvotado= copyArray[selected];
    const maxvotado = (mostvoted.puntaje = Math.max(...copyArray));

    if (auxmaxvotado >= maxvotado) {
      const masvotado = {
        cita: anecdotes[selected],
        puntaje: maxvotado,
      };
      console.log("valor de la cita dentro del If: "+masvotado.cita)
      console.log("valor del puntaje dentro del If "+masvotado.puntaje)
      setMostvoted(masvotado);
    }

    //Aqui le digo cual es el mas votado

    console.log("Valor del mas votado: " + maxvotado);
    console.log("donde estoy parado " + anecdotes[selected]);
    console.log("coordenada de donde estoy parado:" + selected);
    console.log("valor de donde estoy parado:" + copyArray[selected]);

  };

  return (
    <>
      <button onClick={() => aleatorio(anecdotes)}>Ver anecdota</button>
      <div>{props.anecdotes[selected]}</div>
      <div>Puntaje: {points[selected]}</div>
      <button onClick={() => votacion()}>Votar</button>
      <h2>Most voted:</h2>
      <div>
        <p>Cita: {mostvoted.cita}</p>
        <p>Puntaje: {mostvoted.puntaje}</p>
      </div>
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
