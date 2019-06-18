import React, { useState } from 'react';
import ReactDOM from 'react-dom';
const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}
const Title = ({text}) => <h1>{text}</h1>
const Statistic = ({type, count, unit}) => (
    <tr>
        <td>{type}</td>
        <td>{count} {unit}</td>
    </tr>
)
const Statistics = (props) => {
    if(props.data.isFeedbackGiven)
        return (
            <table>
                <tbody>
                    <Statistic type={'good'} count={props.data.good}/>
                    <Statistic type={'neutral'} count={props.data.neutral}/>
                    <Statistic type={'bad'} count={props.data.bad}/>
                    <Statistic type={'all'} count={props.data.all}/>
                    <Statistic type={'average'} count={props.data.average}/>
                    <Statistic type={'positive'} count={props.data.percentage}  unit={'%'}/>
                </tbody>
            </table>
        )
    return (
        <div>
            <p>No feedback given.</p>
        </div>
    )
}
const App = (props) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [isFeedbackGiven, setIsFeedbackGiven] = useState(false)

    const handleGood = () => {
        if(!isFeedbackGiven)
            setIsFeedbackGiven(true)
        setGood(good + 1)
    }
    const handleNeutral = () => {
        if(!isFeedbackGiven)
            setIsFeedbackGiven(true)
        setNeutral(neutral + 1)
    }
    const handleBad = () => {
        if(!isFeedbackGiven)
            setIsFeedbackGiven(true)
        setBad(bad + 1)
    }
    let all = good + neutral + bad
    let average = (good + bad * -1) / all
    let percentage = (good * 100 / all) || 0
    return (
        <div>
            <Title text='give feedback' />
            <Button text='good' onClick={handleGood}/>
            <Button text='neutral' onClick={handleNeutral}/>
            <Button text='bad' onClick={handleBad}/>
            <Title text='statistics' />
            <Statistics data={{isFeedbackGiven: isFeedbackGiven, good: good, bad: bad, neutral: neutral, average: average, percentage: percentage}} />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));