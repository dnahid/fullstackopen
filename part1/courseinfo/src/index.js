import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course} />
      <Content partName={part1} noOfExpercise={exercises1} />
      <Content partName={part2} noOfExpercise={exercises2} />
      <Content partName={part3} noOfExpercise={exercises3} />
      <Total a={exercises1} b={exercises2} c={exercises3} />
    </div>
  )
}

const Header = (props) => (
    <h1>{props.courseName}</h1>
)
const Content = (props) => (
    <p>{props.partName} {props.noOfExpercise}</p>
)
const Total = (props) => (
    <p>Number of exercises {props.a + props.b + props.c}</p>
)

ReactDOM.render(<App />, document.getElementById('root'))