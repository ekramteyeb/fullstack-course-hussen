import React,{useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';
import axios from 'axios';

const  App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [search, setSearch] = useState('')

  const hook = () => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }
  
  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()

    if(newName !== ''){
      if(isAdded(newName,persons)){
        alert(`${newName} is already added to the phone book.`) 
      }else{
        const person = {
          name: newName,
          number:number
        }
        setPersons(persons.concat(person))
        setNewName('')
        setNumber('')
      }
      }
  }

  const handleNewName = (event) => {
        setNewName(event.target.value)
        //console.log(event.target.value)
        
  }
  const handleNumber = (event) => {
    setNumber(event.target.value)
    //console.log(event.target.value)

  }
  const handleSearch = (event) =>{
    setSearch(event.target.value)
  }
// returns true if the given name already found in the array ,,,case insansitive 
  const isAdded = (person, persons) => persons.some(person => person.name.toLowerCase() === newName.toLowerCase())
  
// returns filterd persons name based on a given search text
  const searchPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} />
      <h3>Add a new</h3>
     <PersonForm 
       newName={newName}
       number={number}
       handleNewName={handleNewName}
       handleNumber={handleNumber}
       addPerson={addPerson}
     />

      <h3>Numbers</h3>
      <Persons persons={searchPersons}/>
    </div>
  )
}

export default App;
