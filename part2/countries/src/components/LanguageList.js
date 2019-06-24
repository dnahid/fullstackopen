import React from 'react'

const LanguageList = ({languages}) => {
    return (
        <ul>
            { languages.map((language => <li key={language.iso639_1}>{language.name}</li>)) }
        </ul>
    )
}

export default LanguageList