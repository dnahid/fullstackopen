import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0413691524' },
    { name: 'Arto Tommi', number: '5235235' },
    { name: 'Tommi Hellas', number: '5235235' },
    { name: 'Nahidul Islam', number: '123' },
    { name: 'Ruhi Sen', number: '8686' },
    { name: 'Kamal Sen', number: '4357' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearchValue, setNewSearchValue ] = useState('')
  const handlePersonNameInput = (event) => {
    setNewName(event.target.value.trim())
  }
  const handlePhoneNumberInput = (event) => {
    setNewNumber(event.target.value.trim())
  }
  const handleFilterInput = (event) => {
    setNewSearchValue(event.target.value.trim())
  }
  const savePerson = (event) => {
    event.preventDefault()
    persons.map(person => person.name).includes(newName) ? alert(`${newName} is already added to phonebook`) : setPersons([...persons, {name:newName, number: newNumber}])
    setNewName('')
    setNewNumber('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <h2>Add a new</h2>
      <Filter valueChangeHandler={handleFilterInput} value={newSearchValue} />
      <PersonForm nameField={{newName: newName, handlePersonNameInput: handlePersonNameInput}} numberField={{newNumber: newNumber, handlePhoneNumberInput: handlePhoneNumberInput}} savePerson={savePerson} />
      <h2>Numbers</h2>
      <Persons persons={ newSearchValue.length ? persons.filter(person => person.name.toLowerCase().includes(newSearchValue.toLowerCase())) : persons } />
    </div>
  )
}

export default App