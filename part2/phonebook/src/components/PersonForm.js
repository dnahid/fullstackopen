import React from 'react'

const PersonForm = (props) => {
    return (
        <form>
            <div>
                name: <input onChange={props.nameField.handlePersonNameInput} value={props.nameField.newName} />
                number: <input onChange={props.numberField.handlePhoneNumberInput} value={props.numberField.newNumber} />
            </div>
            <div>
                <button type="submit" onClick={props.savePerson}>add</button>
            </div>
      </form>
    )
}

export default PersonForm