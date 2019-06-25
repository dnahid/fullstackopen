import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const list = () => axios
                    .get(baseURL)
                    .then(response => response.data)

const create = (person) => axios
                            .post(baseURL, person)
                            .then(response => response.data)

const update = (person) => axios
                            .put(`${baseURL}/${person.id}`, person)
                            .then(response => response.data)

const remove = (id) => axios
                        .delete(`${baseURL}/${id}`)
                        .then(response => response.data)

export default {list, create, update, remove}