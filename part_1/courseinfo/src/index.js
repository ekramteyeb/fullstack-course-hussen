import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';


const App = () => {
	
	const course = {
		
		name: 'Half Stack application development',
	 	parts:[
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
}
	return (
		<div>
			<Header name={course.name} />
			
			<Content name1={course.parts[0].name} exercise1={course.parts[0].exercises} 
					 name2={course.parts[1].name} exercise2={course.parts[1].exercises} 
					 name3={course.parts[2].name} exercise3={course.parts[2].exercises}/>
			
			<Total exercise1={course.parts[0].exercises} exercise2={course.parts[1].exercises} exercise3={course.parts[2].exercises}/>
			
		</div>
	)
}

const Header = (props) => <h1>{props.name}</h1>

const Content = (props) => {
	
	return(
	<>
		
		<Part   name={props.name1} exercise={props.exercise1}/>
		
		<Part   name={props.name2} exercise={props.exercise2}/>
		
		<Part   name={props.name3} exercise={props.exercise3}/>
	
	</>
	)
}

const Part = (props) => <p>{props.name} {props.exercise}</p>	



const Total = (props) => <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
	

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
