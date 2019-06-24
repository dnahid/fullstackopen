import React from 'react'

const Country = ({country, showDetails}) => {
    const handleShowDetails = () => {
        showDetails(country.alpha2Code)
    }
    return (
        <li>{country.name}<button onClick={handleShowDetails}>show</button></li>
    )
}

export default Country