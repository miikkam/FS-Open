
const flagStyle = {
    objectFit: 'cover',
    width: '250px',
    height: '100%'
}

const Language = ({name}) => {
    return (
        <li>{name}</li>
    )}

const Languages = ({languages}) => {
    return (
    Object.values(languages).map(value => {
        console.log(value)
        return (
            <ul>
                <Language key={value} name={value} />
            </ul>
        )
        
    })
)}

const OneCountry = ({country}) => {
    return (
        <div>
            <h2>{country.name.common}</h2>
            capital {country.capital} <br/>
            area {country.area} <br/>
            <h3>languages:</h3>
            <Languages  languages={country.languages} />
            <div>
               <img style={flagStyle} src={country.flags.png} />
            </div>
            <h2>Weather in {country.capital}</h2>
    
        </div>
        
    )
    
}

export default OneCountry