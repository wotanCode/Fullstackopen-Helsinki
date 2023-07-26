import { useState, useEffect } from "react"
import axios from 'axios'

import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const handlePersons = (e) => {
  e.preventDefault()
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setnewPhone] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/db')
      .then(response => {
        setPersons(response.data.persons)
      })
  }, [])

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
        { name: newName, number: newPhone }
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
