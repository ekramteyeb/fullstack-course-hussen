import React from 'react'

const Person = ({ name, number, handleDeletePerson,value}) => <p id={value}> {name} {number} <button value={value} onClick={handleDeletePerson}>delete</button></p>

export default Person