import React, { useState } from 'react'
import Person from './components/Person'

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
    setNewName(event.target.value)
  }
  const handlePhoneNumberInput = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterInput = (event) => {
    setNewSearchValue(event.target.value)
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
      <div>
          filter shown with: <input onChange={handleFilterInput} value={newSearchValue} />
      </div>
      <form>
        <div>
          name: <input onChange={handlePersonNameInput} value={newName} />
          number: <input onChange={handlePhoneNumberInput} value={newNumber} />
        </div>
        <div>
          <button type="submit" onClick={savePerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
          { newSearchValue.length ? persons.filter(person => person.name.toLowerCase().includes(newSearchValue.toLowerCase())).map((person, i) => <Person person={person} key={i} />) : persons.map((person, i) => <Person person={person} key={i}/>)}
      </ul>
    </div>
  )
}

export default App