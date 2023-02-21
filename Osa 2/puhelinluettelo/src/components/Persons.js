import Person from './Person'

const Persons = (props) => {
    return (
        <ul>
            {props.personsToShow().map(person =>
            <Person key={person.name} person={person} handleDel={() => props.handleDel(person.id)} />
            )}
        </ul>
    )
}

export default Persons