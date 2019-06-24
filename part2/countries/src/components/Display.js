import React from 'react'
import CountryDetails from './CountryDetails'
import CountryList from './CountryList'

const Display = ({data, countryClicked, showDetails}) => {

    if (data.length > 10) {
        return (
         <p>Too many matches, specify another filter.</p> 
       )
     }
     else if(data.length === 1) {
        return <CountryDetails country={data[0]}/>
     }
     else {
        return countryClicked[0] ?  <CountryDetails country={data.filter(country => country.alpha2Code === countryClicked[1])[0]}/> : <CountryList countries={data} showDetails={showDetails}/>
     }
}

export default Display