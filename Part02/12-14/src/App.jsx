import { useState, useEffect, Fragment } from "react"
import axios from 'axios'

const handlePreventDefault = (e) => {
  e.preventDefault()
}

const App = () => {
  const [countries, setCountries] = useState('');
  const [dataResponse, setDataResponse] = useState([]);

  const handleCountries = (e) => {
    setCountries(e.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setDataResponse(response.data);
      })
  }, [])

  const filteredCountries = dataResponse?.filter(country => country.name.common.toLowerCase().includes(countries.toLowerCase()));

  const handleOnClick = (e) => {
    setCountries(e)
  }

  return (
    <div>
      <h2>Paises</h2>

      <form onSubmit={handlePreventDefault}>
        <div>find Countries: <input onChange={handleCountries} /></div>
      </form>

      {countries === '' ? (
        <p>Search countries!</p>
      ) :
        filteredCountries.length === 1 ? (
          <div>
            <h1>{filteredCountries[0].name.common}</h1>
            <p>Capital: {filteredCountries[0].capital[0]}</p>
            <p>Population: {filteredCountries[0].population}</p>
            <h3>Languages</h3>
            <ul>
              {Object.entries(filteredCountries[0].languages).map(([code, language]) => (
                <li key={code}>{code}: {language}</li>
              ))}
            </ul>
            <img src={filteredCountries[0].flags.png} alt={filteredCountries[0].name.common} />
          </div>
        ) : (
          filteredCountries.length < 10 ? (
            <ul>
              {filteredCountries.map(country => (
                <Fragment key={country.name.common}>
                  <li>{country.name.common}</li>
                  <button onClick={() => handleOnClick(country.name.common)}>show</button>
                </Fragment>
              ))}
            </ul>
          ) : filteredCountries.length > 10 ? (
            <>Muchas coincidencias, debe haber menos de 10</>
          ) : (
            <>Not found!</>
          )
        )}
    </div>
  )
}

export default App
