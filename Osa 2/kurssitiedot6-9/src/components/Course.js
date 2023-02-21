const Header = ({name}) => {
    return (
      <h1>
        {name}
      </h1>
    )
  }
  
  const Part = ({name, number}) => {
    return (
      <p>
        {name} {number}
      </p>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} name={part.name} number={part.exercises} />
        )}
      </div>
    )
  }
  
  const Total = ({parts}) => {
    const total = parts.reduce((sum, p) =>sum = sum + p.exercises, 0);
    return (
      <div>
        <p>
          total of {total} exercises
        </p>
      </div>
    )
  }
  
  const Course = ({course}) => {
    return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
    )
  }

  export default Course