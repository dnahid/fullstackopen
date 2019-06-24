import React, {useState, useEffect} from 'react'
import LanguageList from './LanguageList'
import axios from 'axios'

const CountryDetails = ({country}) => {
    const [weather, setWeather] = useState({})

    useEffect(() => {
        axios
            .get('https://api.apixu.com/v1/current.json?key=e5dc016ca40c4ee7a53133621192406&q=' + country.capital)
            .then(response => {
                setWeather({
                    temperature: response.data.current.temp_c,
                    temperature_img: 'https:' + response.data.current.condition.icon,
                    wind_kph: response.data.current.wind_kph,
                    wind_dir: response.data.current.wind_dir 
                })
            })
    }, [])

    const flagStyle = {
        height: '100px',
        width: '100px'
    }
    const temperatureImgStyle = {
        height: '50px',
        width: '50px'
    }

    return (
        <div>
            <h1>{country.name}</h1>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <h2>Languages</h2>
            <LanguageList languages={country.languages} />
            <img src={country.flag} alt={country.name + '_flag'} style={flagStyle}/>
            <h2>Weather in {country.capital}</h2>
            <div><b>temperature:</b> {weather.temperature} Celcius</div>
            <img src={weather.temperature_img} alt={country.name + '_temperature_img'} style={temperatureImgStyle} />
            <div><b>wind:</b> {weather.wind_kph} direction {weather.wind_dir}</div>
        </div>
    )
}

export default CountryDetails