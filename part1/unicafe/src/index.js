import React, { useState } from 'react';
import ReactDOM from 'react-dom';
const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}
const Title = ({text}) => <h1>{text}</h1>
const Statistics = ({type, count, unit}) => <p>{type} {count} {unit}</p>
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
    if(isFeedbackGiven)
    return (
        <div>
            <Title text='give feedback' />
            <Button text='good' onClick={handleGood}/>
            <Button text='neutral' onClick={handleNeutral}/>
            <Button text='bad' onClick={handleBad}/>
            <Title text='statistics' />
            <div>
                <Statistics type={'good'} count={good}/>
                <Statistics type={'neutral'} count={neutral}/>
                <Statistics type={'bad'} count={bad}/>
                <Statistics type={'all'} count={good + neutral + bad}/>
                <Statistics type={'average'} count={average}/>
                <Statistics type={'positive'} count={ (good * 100 / all) || 0}  unit={'%'}/>
            </div>
        </div>
    )
    return (
        <div>
        <Title text='give feedback' />
        <Button text='good' onClick={handleGood}/>
        <Button text='neutral' onClick={handleNeutral}/>
        <Button text='bad' onClick={handleBad}/>
        <Title text='statistics' />
        <div>
            <p>No feedback given.</p>
        </div>
    </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));