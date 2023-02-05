const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.number}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part name = {props.part[0].name} number = {props.part[0].exs} />
      <Part name = {props.part[1].name} number = {props.part[1].exs} />
      <Part name = {props.part[2].name} number = {props.part[2].exs} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Number of exercises {props.count}
      </p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {name : 'Fundamentals of React', exs : 10},
    {name : 'Using props to pass data', exs : 7},
    {name : 'State of a component', exs : 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content part={parts} />
      <Total count={parts[0].exs + parts[1].exs + parts[2].exs} />
    </div>
  )
}

export default App