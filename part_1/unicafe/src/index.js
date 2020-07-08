import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  const [all , setAll] = useState(0)
 

  
  const average = (all) => (all/3).toFixed(1)
  const percentage = (feedback, all) => {
    if (all > 0){
      return (feedback/ all * 100).toFixed(2) * 100/ 100
    }
  }  
  
  
  return (
    <>
      <h1>Give feedback</h1>
      <Button handleClick={() => { 
        setGood(good + 1)
        setAll(all + 1)}} text='Good' />
      <Button handleClick={() => {
        setNeutral(neutral + 1)
        setAll(all + 1)
        }} text='Neutral' />
      <Button handleClick={() => {
        setBad(bad + 1)
        setAll(all + 1)
        }} text='Bad' />   
      
      <h4>Statistics </h4>
      <Statistics good={good}  neutral={neutral} bad={bad} average={average(all)} percentage={percentage(good, all)} sign={(average(all) > 0)? '%': ''}/>
      </>
  )
}
const Button = ({handleClick, text}) => <button onClick={handleClick}> {text} </button>

const Statistics = (props) => {
  if(props.average == 0){
    return (
      <>
        No feedback to display yet. 
      </>
    )

  }
  return (
  <>
      <Statistic name={'Good'} value={props.good} /> 
      <Statistic name={'Neutral'} value={props.neutral} /> 
      <Statistic name={'Bad'} value={props.bad} /> 
      <Statistic name={'Average'} value={props.average} /> 
      <Statistic name={'Positive'} value={props.percentage} sign={props.sign}/> 
  </>
  ) 
}

const Statistic = ({ name, value, sign}) => <p> {name} {value} {sign}</p>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

