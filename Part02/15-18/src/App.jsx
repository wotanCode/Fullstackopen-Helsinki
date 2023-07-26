import { useState, useEffect } from "react"

import api from './api'

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
    api.handleGetAll().then(response => {
      setPersons(response.persons)
    })
  }, [])

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewPhone = (e) => {
    setnewPhone(e.target.value)
  }

  const handleUpdate = (id, newPhone) => {
    api.handleUpdate(id, newPhone)
      .then(() => {
        setPersons(persons.map(person => person.id === id ? { ...person, number: newPhone } : person));
      })
      .catch(error => {
        console.log('Error mientras se actualizaba:', error);
      });
  };

  const handleNewPerson = () => {
    const existingPerson = persons.find(p => p.name === newName);

    if (!existingPerson) {
      setPersons([
        ...persons,
        { name: newName, number: newPhone }
      ]);
      api.handleCreate({ name: newName, number: newPhone });
    } else {
      const userConfirmed = window.confirm(`${newName} ya está en la lista. ¿Quieres cambiar el número de teléfono?`);

      if (userConfirmed) {
        handleUpdate(existingPerson.id, newPhone);
      }
    }
  }

  const handleDelete = (id) => {
    const userConfirmed = window.confirm('Are you sure you want to delete this?');
    if (userConfirmed === true) {
      api.handleDelete(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          console.log('Error while deleting:', error)
        });
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

      <Persons persons={persons} onDelete={handleDelete} />

    </div>
  )
}

export default App
