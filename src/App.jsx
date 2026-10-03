const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = ({ part }) => (
  <p>{part.name} {part.exercises}</p>
)

const Content = ({ parts }) => (
  <div>
    {parts.map(part =>
      <Part key={part.name} part={part} />
    )}
  </div>
)

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'IT386'
  const parts = [
    {
      name: 'IT317',
      exercises: 3
    },
    {
      name: 'IT340',
      exercises: 3
    },
    {
      name: 'IT334',
      exercises: 3
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App