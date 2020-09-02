import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Course from './components/Course'

const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [{
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [{
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
      ]
    }
  ]
  //to avoid hard coding to display each individual course , I created 'Display' component which handles to 
  //to iterate over individual course object and display them 
  
  const Display =  ({courses}) =>{
        const display = courses.map(course => <Course key={course.id} course={course} />)
        return display
  }
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Display courses={courses}/>
    </div>
  )
}


export default App;
