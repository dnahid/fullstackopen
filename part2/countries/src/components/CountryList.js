import React from 'react'
import Country from './Country'

const CountryList = ({countries, showDetails}) => {
    return (
        <ul>
            { countries.map(country => <Country key={country.alpha2Code} country={country} showDetails={showDetails} />) }
        </ul>
    )
}

export default CountryList