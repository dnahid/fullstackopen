import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Display from './components/Display'

const App  = () => {
  const [ textVal, setTextVal ] = useState('')
  const [ data, setData ] = useState([])
  const [ filteredData, setFilteredData ] = useState([])
  const [ countryClicked, setCountryClick ] = useState([false, ''])
  
  const showDetails = (code) => {
      setCountryClick([true, code])
  }
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setData(response.data)
      })
  }, [])

  const handleInputChange = (event) => {
    setTextVal(event.target.value)
    setCountryClick([false, ''])
    setFilteredData(data.filter((country) => country.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }
  return (
    <div>
      <Filter handleInputChange={handleInputChange} value={textVal}/>
      {textVal.trim().length === 0 ? '' : <Display data={filteredData} countryClicked={countryClicked} showDetails={showDetails}/>}
    </div>
  )
}

export default App
