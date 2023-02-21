import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Search from './components/Search'
import personservice from './services/phonebook'
import Notification from './components/Notification'

const errorStyle = {
  color: "green",
  background: "lightgrey",
  fontSize: 20,
  borderStyle: "solid",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setSearchInput] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    personservice
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])


  const handleSearch = (event) => {
    setSearchInput(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleDel = (id) => {
    const personToDelete = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${id}?`)) {
      personservice
      .deletePerson(id)
      .then(response => {
        console.log(response)
      })
      personservice
        .getAll()
        .then(initialPersons => {
          setPersons(initialPersons)
        })

      setErrorMessage(
        `Removed ${personToDelete.name} from phonebook`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
    
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    const names = persons.map(person => person.name)
    const isName = (names.indexOf(nameObject.name) > -1)
    if (isName) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`)) {
        const id = persons.map(person => person.id)
        personservice
        .update(id, nameObject)
          .then(updatedPerson => {
            setPersons(persons.map(p => p.id !== updatedPerson.id ? p : updatedPerson))
          })
        setErrorMessage(
          `Updated the number of ${nameObject.name}`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
    }
  
    else {
      personservice
        .create(nameObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
          })
      setErrorMessage(
        `Added ${nameObject.name} to phonebook`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = () => {
    if (newSearch === '') {
      return persons
    }

    return persons.filter(
      p => p.name.toLowerCase().indexOf(newSearch.toLowerCase()) !== -1
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} style={errorStyle}/>
      <Search newSearch={newSearch} handleSearch={handleSearch} />
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} 
      newNumber={newNumber} handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} handleDel={handleDel} />
    </div>
  )

}

export default App