import React from 'react'

const Filter = ({valueChangeHandler, value}) => {
    return (
        <div>
            filter shown with: <input onChange={valueChangeHandler} value={value} />
        </div>
    )
}

export default Filter