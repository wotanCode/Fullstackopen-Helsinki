const PersonForm = (props) => {

  return (
    <form onSubmit={props.handlePersons}>
      <div>name: <input onChange={props.handleNewName} /></div>
      <div>Phone: <input onChange={props.handleNewPhone} /></div>

      <div>
        <button
          type="submit"
          onClick={props.handleNewPerson}
        >
          add
        </button>
      </div>
    </form>
  )
}

export default PersonForm;
