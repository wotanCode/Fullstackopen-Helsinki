import { useState, useEffect } from "react"

import api from './api'

import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';

const handlePersons = (e) => {
  e.preventDefault()
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setnewPhone] = useState('')
  const [notification, setNotification] = useState({ message: '', status: '', })

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

      setNotification(
        { message: `${newName} fue agregado a la agenda`, status: 'success', }
      )
      setTimeout(() => {
        setNotification({ message: '', status: '', })
      }, 5000)
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
          setNotification(
            { message: `${newName} Ya fue eliminado`, status: 'error', }
          );
          setTimeout(() => {
            setNotification({ message: '', status: '', })
          }, 5000)
        })
        .catch(error => {
          console.log('Error while deleting:', error)
        });
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      {notification.message !== '' && (
        <Notification message={notification.message} status={notification.status} />
      )}

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
