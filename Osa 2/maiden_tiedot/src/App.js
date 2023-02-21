import React, {useState, useEffect} from 'react'
import Search from './components/Search'
import Countries from './components/Countries'
import apiService from './services/apiService'

function App() {
  const [countries, setCountries] = useState([])
  const [newSearch, setSearchInput] = useState('')

  useEffect(() => {
    apiService
      .getCountries()
      .then(all => {
        setCountries(all)
      })
  })
  const handleSearch = (event) => {
    setSearchInput(event.target.value)
  }

  const showCountries = () => {
    if (newSearch === '') {
      return countries
    }
    const countriesToShow = countries.filter(
      c => c.name.common.toLowerCase().indexOf(newSearch.toLowerCase()) !== -1
      
    )
    return countriesToShow
    
  }
  return (
    <div>
      <Search newSearch={newSearch} handleSearch={handleSearch} />
      <Countries countriesToShow={showCountries()} countryButton={setSearchInput} />
    </div>
  );
}

export default App;
