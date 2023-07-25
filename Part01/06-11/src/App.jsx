import { useState } from "react"

const StatisticsLine = ({ value, text }) => {
  return (
    <tr>
      <td>{text}: </td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  return (

    <table>
      <tbody>
        <StatisticsLine text={'Good'} value={good} />
        <StatisticsLine text={'Neutral'} value={neutral} />
        <StatisticsLine text={'bad'} value={bad} />
        <StatisticsLine text={'all'} value={good + neutral + bad} />
        <StatisticsLine text={'Average'} value={(good - bad) / (good + neutral + bad)} />
        <StatisticsLine text={'Positive'} value={(good * 100) / (good + neutral + bad)} />
      </tbody>
    </table>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button onClick={() => setGood(good + 1)} text={'Good'} />
      <Button onClick={() => setNeutral(neutral + 1)} text={'Neutral'} />
      <Button onClick={() => setBad(bad + 1)} text={'Bad'} />

      <h2>Statics</h2>

      {
        good !== 0 || neutral !== 0 || bad !== 0 ?
          <Statistics good={good} neutral={neutral} bad={bad} />
          : <p>No feedback given</p>
      }
    </div>
  )
}

export default App
