import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = (props) => {

  const points = Array(props.anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([...points])
  const [max, setMax] = useState(0)
  
  const handleClick = () => {
    let random = Math.floor(Math.random() * props.anecdotes.length) 
     setSelected(random)
  }
  const handleVoteClick = () => { 
    vote[selected] += 1
    setVote([...vote])
    setMax(maxVote(vote))
  }
  // return the index of anecdote with max votes 
  const maxVote = (votes) => { 
    let max = votes[0]
    let index ,i
    for(i = 0; i < votes.length; i++){
      if(votes[i] >= max){
        max = votes[i] 
        index = i
      }

    }
    return index
   }

  return (
    <div>
      <h1>Anecdotes - React App  </h1>
      <p>{props.anecdotes[selected]} </p>
      <p>has {vote[selected]} votes </p>

      <Button handleClick={handleVoteClick} text={'Vote'} />
      <Button handleClick={handleClick} text={'Next anecdote'} />
      
     
     <h2>Anecdote with most votes</h2>
      {props.anecdotes[max]} 
      <p>has {vote[maxVote(vote)]} votes </p>
      {/* <p>Votes : {vote.join(' ')} </p>
      <p>Max votes index  : {maxVote(vote)} </p> */}  
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
const Button = ({handleClick, text}) =>  <button onClick={handleClick}> {text}</button>

ReactDOM.render(
  <React.StrictMode>

    <App anecdotes={anecdotes}/>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

