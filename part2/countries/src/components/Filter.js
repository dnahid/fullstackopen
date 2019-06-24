import React from 'react'

const Filter = ({handleInputChange, value}) => {
    return (
        <div>
            find contries : <input onChange={handleInputChange} value={value}/>
        </div>
    )
}

export default Filter