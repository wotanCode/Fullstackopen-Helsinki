import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//Funcion aleatoria
// const aleatorio = (anecdotes.length) => {
//   console.log("Generando numero aleatorio")
//   return (Math.floor((Math.random() * (anecdotes.length - 0 + 1)) + 0))
// }


const App = (props) => {
  const [selected, setSelected] = useState(0)

  const aleatorio = (anecdotes) => {
    let random;
    console.log("Generando numero aleatorio")
    console.log("Largo del arreglo =>"+ anecdotes.length)
    random = Math.floor(Math.random() * anecdotes.length)
    console.log(random)
    setSelected(random)
  }
  

  return (
    <>
    <button onClick={() => aleatorio(anecdotes)}>Ver anecdota</button>
    <div>
      {props.anecdotes[selected]}
    </div>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)