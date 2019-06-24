import React from 'react'
import LanguageList from './LanguageList'
const CountryDetails = ({country}) => {
    const flagStyle = {
        height: '100px',
        width: '100px'
    }
    return (
        <div>
            <h1>{country.name}</h1>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <h2>Languages</h2>
            <LanguageList languages={country.languages} />
            <img src={country.flag} alt={country.name + 'flag'} style={flagStyle}/>
        </div>
    )
}

export default CountryDetails