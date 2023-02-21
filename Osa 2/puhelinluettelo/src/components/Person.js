const Person = ({ person, handleDel }) => {
    return (
      <li>{person.name} {person.number}
      <button  onClick={handleDel}>delete</button>
      </li>
    )
  }
  
export default Person