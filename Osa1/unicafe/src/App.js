import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const allClicks = props.goodClicks + props.neutralClicks + props.badClicks
  const posShare = props.goodClicks / allClicks * 100
  const avrg = (props.goodClicks - props.badClicks) / allClicks
  if (allClicks === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text="good" value={props.goodClicks} />
      <StatisticLine text="neutral" value={props.neutralClicks} />
      <StatisticLine text="bad" value={props.badClicks} />
      <StatisticLine text="all" value={allClicks} />
      <StatisticLine text="average" value={avrg} />
      <StatisticLine text="positive" value={posShare} />%
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good +1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>
        Give feedback
      </h2>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h2>
        Statistics
      </h2>
      <Statistics goodClicks={good} neutralClicks={neutral} badClicks={bad} />
    </div>
  )
}

export default App