import React from 'react'
import Person from './Person'

const Persons = ({persons, deletePerson}) => <ul>{ persons.map((person,i) => <Person person={person} deletePerson={deletePerson} key={i} />) }</ul>

export default Persons