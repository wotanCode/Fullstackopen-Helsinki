import { Fragment } from 'react'
const Persons = (props) => {

  return (
    <div>
      {props.persons.map((person, i) => (
        <Fragment key={person.name + i}>
          <p>{person.name} / {person.number}</p>
          <button onClick={() => props.onDelete(person.id)}>delete</button>
        </Fragment>
      ))}
    </div>
  )
}

export default Persons;
