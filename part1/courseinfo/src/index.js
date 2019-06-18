import React, {useState} from 'react'
import ReactDOM from 'react-dom'

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <Header courseName={course.name} />
//       course.parts.forEach( (part) => (<Content partName={part.name} noOfExpercise={part.exercies} />))
//       <Total a={course.parts[0].exercises} b={course.parts[1].exercises} c={course.parts[2].exercises} />
//     </div>
//   )
// }

// const Header = (props) => (
//     <h1>{props.courseName}</h1>
// )
// const Content = (props) => (
//     <p>{props.partName} {props.noOfExpercise}</p>
// )
// const Total = (props) => (
//     <p>Number of exercises {props.a + props.b + props.c}</p>
// )
const History = (props) => {
  if(props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons.
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text })  => (
  <button onClick={onClick}>{text}</button>
)

const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div> 
        <Button onClick={handleLeftClick} text='left' />
        <Button onClick={handleRightClick} text='right' />
        <p><span>Left Value: {left}</span> <span>Right Value: {right}</span></p> 
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))