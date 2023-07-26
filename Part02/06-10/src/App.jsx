import { useState } from "react"

import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const handlePersons = (e) => {
  e.preventDefault()
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '44-32-123123' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setnewPhone] = useState('')

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewPhone = (e) => {
    setnewPhone(e.target.value)
  }

  const handleNewPerson = () => {
    if (!persons.find(p => p.name === newName)) {
      setPersons([
        ...persons,
        { name: newName, phone: newPhone }
      ]);
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <PersonForm
        handlePersons={handlePersons}
        handleNewName={handleNewName}
        handleNewPhone={handleNewPhone}
        handleNewPerson={handleNewPerson}
      />

      <h2>Numbers</h2>

      <Persons persons={persons} />

    </div>
  )
}

export default App
