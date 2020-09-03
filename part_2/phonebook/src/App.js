import React,{useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';

const  App = () => {

  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [search, setSearch] = useState('')
  
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
