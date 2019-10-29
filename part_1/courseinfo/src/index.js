import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';


const App = () => {
	
	const course = 'Half Stack application development '
	const part1 = 'Fundamentals of React '
	const exercise1 = 10
	const part2 = 'Using props to pass data '
	const exercise2 = 7
	const part3 = 'State of a component '
	const exercise3 = 14
	
	return (
		<div>
			
			
			<Header course={course} />
			<Content part1={part1} exercise1={exercise1} part2={part2} exercise2={exercise2} part3={part3} exercise3={exercise3}/>
			<Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3}/>
			
			
		
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
		
		<Part1   part1={props.part1} exercise1={props.exercise1}/>
		
		<Part2   part2={props.part2} exercise2={props.exercise2}/>
		
		<Part3   part3={props.part3} exercise3={props.exercise3}/>
		
		
	
	
	
    </>
	
	

)

const Part1 = (props) => (
	
	
		<p>{props.part1} {props.exercise1}</p>		
	
	

)

const Part2 = (props) => (
	
	<div>
		<p>{props.part2} {props.exercise2}</p>		
	
	</div>

)

const Part3 = (props) => (
	
	<div>
		<p>{props.part3} {props.exercise3}</p>		
	
	</div>

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
