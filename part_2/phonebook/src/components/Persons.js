import React from 'react'
import Person from './Person'

const Persons = (props) => {

    return (
       props.persons.map(
            person => <Person key={person.id} value={person.id} name={person.name} number={person.number} handleDeletePerson={props.handleDeletePerson}  />
        ) 
    )
}
export default Persons