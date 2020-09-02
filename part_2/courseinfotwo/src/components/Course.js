import React from 'react'

const Header = ({ course }) => <h3>{course.name}</h3>

const Total = ({ course }) => {

    const total = course.parts.reduce((a, b, index) => a + b.exercises, 0)

    return (

        <h5>Total of  {total} exercises</h5>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = ({ course }) => {
    const parts = course.parts.map(part => <Part key={part.id} part={part}/>)
    return parts


}

const Course = ({ course }) => {

    return (
        <>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </>
    )
}

export default Course