import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonsService from './services/PersonsService'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearchValue, setNewSearchValue ] = useState('')
  const [ message, setMessage ] = useState(null)
  const [ type, setType ] = useState('error')
  
  useEffect(
    () => {
      PersonsService.list().then(persons => setPersons(persons))
    },[])

  const handlePersonNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneNumberInput = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterInput = (event) => {
    setNewSearchValue(event.target.value.trim())
  }

  const savePerson = (event) => {
    event.preventDefault()
    const foundPerson = persons.find(person => person.name.toLowerCase() === newName.trim().toLowerCase())
    if(foundPerson) {
      if(window.confirm(`${foundPerson.name} is already added to phonebook. Do you want to replace the number with a new one?`)){
        PersonsService
        .update({...foundPerson, number: newNumber.trim()})
        .then(response => setPersons(persons.map(person => person.name.toLowerCase() === foundPerson.name.toLowerCase() ? {...person, number:newNumber.trim()} : person)))
      }
    }
    else {
      PersonsService
        .create({name:newName.trim(), number: newNumber.trim()})
        .then(person => {
          setPersons([...persons, person])
          setMessage(`${person.name} is added to the server`)
          setTimeout(() => setMessage(null), 2000)
          setType('success')
        })
        .catch(error => alert(`Error ${error} occured.`))
    }
    setNewName('')
    setNewNumber('')
  }
  const deletePerson = (id) => {
    if(window.confirm(`Do you want to delete ${persons.find(e => e.id === id).name}?`)) {
      PersonsService
        .remove(id)
        .then(response => setPersons(persons.filter(e => e.id !== id)))
        .catch(response => {
          setPersons(persons.filter(e => e.id !== id))
          setMessage(`${id} is already removed from the server.`)
          setTimeout(() => setMessage(null), 2000)
          setType('error')
        })
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={type}/>
      <h2>Add a new</h2>
      <Filter valueChangeHandler={handleFilterInput} value={newSearchValue} />
      <PersonForm nameField={{newName: newName, handlePersonNameInput: handlePersonNameInput}} numberField={{newNumber: newNumber, handlePhoneNumberInput: handlePhoneNumberInput}} savePerson={savePerson} />
      <h2>Numbers</h2>
      <Persons persons={ newSearchValue.length ? persons.filter(person => person.name.toLowerCase().includes(newSearchValue.toLowerCase())) : persons } deletePerson={deletePerson}/>
    </div>
  )
}

export default App