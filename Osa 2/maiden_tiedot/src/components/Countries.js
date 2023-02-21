import Country from "./Country"
import OneCountry from "./OneCountry"

const Countries = ({countriesToShow, countryButton}) => {

    if (countriesToShow.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }

    else if (countriesToShow.length > 1) {
        return (
            <div>
            {countriesToShow.map(country =>
            <Country key={country.name.common} name={country.name.common} countryButton={countryButton} />
            )} 
        </div>
        )
    }

    else if (countriesToShow.length === 1) {
        return (
            <div>
                <OneCountry country={countriesToShow[0]} />
            </div>
        )
    }
}

export default Countries