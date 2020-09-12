import React,{useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';
import personService from './services/persons';
import Notification from './components/Notification';
import Footer from './components/Footer'

const  App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [search, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [style, setStyle] = useState('')

  const hook = () => {
    personService
      .getAll()
      .then(response => {
      setPersons(response)
    })
  }
  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()
    if(newName === '' || number === ''){
      setStyle(false)
      setErrorMessage('Please fill all fields')
      deletErrorMessage()
    }else{

     const personFound = persons.find(person => person.name === newName)
      if (personFound){
      const reply =  window.confirm(`${newName} is already added to the phone book. replace old number with new one? `)
        if(reply){
          const changedPerson = { ...personFound, number: number}
          personService
            .update(personFound.id, changedPerson)
            .then(modifidPerson => setPersons(persons.map(person => person.name !== personFound.name ? person : modifidPerson)))
          setErrorMessage(`${changedPerson.name}'s number changed successfully`)
          setNumber('')
          setNewName('')
          setStyle(true)
          deletErrorMessage()
        }else{
          setNumber('')
          setNewName('')
        }
        
      }else{
        const newPerson = {
          name: newName,
          number:number
        }
        personService
          .create(newPerson)
          .then(nperson => {
            setPersons(persons.concat(nperson))
            setNewName('')
            setNumber('')
            setStyle(true)
            setErrorMessage(`${newPerson.name} is added successfully`)

          })
        
        deletErrorMessage()
      }
      }
  }
   const deletErrorMessage = () =>{
    setTimeout(() => {
      setErrorMessage(null)

    }, 3000)
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

  const handleDeletePerson = (event) => {
    const id = event.target.value
    const person = persons.find(p => p.id.toString() === id)
    const response = window.confirm(`Delete ${person.name} ?`)
    if(response === false){
      return 
    }
      personService
        .remove(id)
        .then(dperson => {
          setPersons(persons.filter(person => person.id.toString() !== id))
          setErrorMessage(`${person.name} is deleted successfully`)
          setStyle(true)
          deletErrorMessage()
        })
        .catch(error =>{
          setPersons(persons.filter(person => person.id.toString() !== id))
          setErrorMessage(`Sorry, ${person.name} is already deleted `)
          setStyle(false)
          deletErrorMessage()
        })
      
       
  }

  
// returns filterd person names based on a given search text
  const searchPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))  

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} notifyColor={style} />
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
      <Persons persons={searchPersons} handleDeletePerson={handleDeletePerson}/>
      {console.log('Count')}
      <Footer />
    </div>
  )
}

export default App;
