import React from 'react'
import Person from './Person'

const Persons = ({persons}) => <ul>{ persons.map((person,i) => <Person person={person} key={i} />) }</ul>

export default Persons