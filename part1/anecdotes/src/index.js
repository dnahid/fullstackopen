import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Title = ({text}) => <h1>{text}</h1>
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const Anecdote = ({text, vote}) => {
    return (
        <div>
            <p>{text}</p>
            <p>has {vote} votes</p>
        </div>
    )
}
const App = (props) => {
    // Returns a random integer between min (include) and max (include)
    // Math.floor(Math.random() * (max - min + 1)) + min;
    const [selected, setSelected] = useState(0)
    const [history, setHistory] = useState(new Array(6).fill(0))
    const handleAnecdoeteSelection = () => {
        let randomNumber = Math.floor(Math.random() * (5 - 0 + 1));
        setSelected(randomNumber)
    }
    const handleVote = () => {
        var newHistory = [...history]
        newHistory[selected] = newHistory[selected] + 1
        setHistory(newHistory)
    }
    let maxVotedAnecdoteIndex = history.indexOf(Math.max(...history))
    return (
        <div>
            <Title text='Anecdote of the day' />
            <Anecdote text={props.anecdotes[selected]} vote={history[selected]}/>
            <Button text='vote' onClick={handleVote} />
            <Button text='next anecdote' onClick={handleAnecdoeteSelection}/>
            <Title text='Anecdote with most votes' />
            <Anecdote text={props.anecdotes[maxVotedAnecdoteIndex]} vote={history[maxVotedAnecdoteIndex]} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));