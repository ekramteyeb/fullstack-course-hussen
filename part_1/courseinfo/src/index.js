import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';


const App = () => {
	

	
	const parts =  [
		{
			name:'Half Stack application development.'
		},
		{
			name:'Fundamentals of React',
			exercises: 10
		},
		
		{
		
			name:'Using props to pass data ',
			exercises: 7
		},
	
		{
			name:'State of a component ',
			exercises:14
		}
	]
	
	return (
		<div>
			
			<Header course={parts[0].name} />
			
			<Content part1={parts[1].name} exercise1={parts[1].exercises} part2={parts[2].name} exercise2={parts[2].exercises} part3={parts[3].name} exercise3={parts[3].exercises}/>
			
			<Total exercise1={parts[1].exercises} exercise2={parts[2].exercises} exercise3={parts[3].exercises}/>
			
		</div>

	
	)
}

const Header = (props) => (
	
	<div>
		<h1>{props.course}</h1>
	
	</div>

)

const Content = (props) => (
	
	<>
		
		<Part   part={props.part1} exercise={props.exercise1}/>
		
		<Part   part={props.part2} exercise={props.exercise2}/>
		
		<Part   part={props.part3} exercise={props.exercise3}/>
	
    </>
	
	

)

const Part = (props) => (
	
		<p>{props.part} {props.exercise}</p>	
)


const Total = (props) => (
	
	<div>
		<p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
	
	</div>

)





ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
