const Country = ({name, countryButton}) => {
    return (
        <div>
            {name}
            <button onClick={() => countryButton(name)}>Show</button>
        </div>
    )
}

export default Country