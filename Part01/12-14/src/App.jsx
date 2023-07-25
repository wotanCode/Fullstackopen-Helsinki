import React, { useState } from 'react'

const anecdotesList = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Anecdotes = ({ anecdotes }) => {
  return (
    <div>
      {anecdotes}
    </div>
  )
}

const detectPosition = (arr) => {
  let maxValor = arr[0];
  let posicionesMaxValor = [0];

  arr.forEach((valorActual, index) => {
    if (valorActual > maxValor) {
      maxValor = valorActual;
      posicionesMaxValor = [index];
    } else if (valorActual === maxValor) {
      posicionesMaxValor.push(index);
    }
  });

  return { maxValor, posicionesMaxValor };
}

const App = () => {
  const [selected, setSelected] = useState({
    anecdote: 0,
    points: new Uint8Array(anecdotesList.length),
  })

  const result = detectPosition(selected.points);

  return (
    <>
      <Anecdotes anecdotes={anecdotesList[selected.anecdote]} />
      <button onClick={() => setSelected(
        {
          ...selected,
          anecdote: getRandomInt(anecdotesList.length)
        })}
      >
        next anecdote
      </button>

      <p>Has vote: {selected.points[selected.anecdote]}</p>

      <button onClick={() => {
        const copyArr = [...selected.points]
        copyArr[selected.anecdote] += 1
        setSelected(
          {
            ...selected,
            points: copyArr
          })
      }}
      >
        vote +1
      </button>


      <h2>Anecdote with most votes</h2>
      <Anecdotes anecdotes={anecdotesList[result.posicionesMaxValor[0]]} />
    </>
  )
}

export default App;
