import axios from 'axios'

const baseUrl = 'http://localhost:3001/'

const handleCreate = async (newObject) => {
  const request = axios.post(`${baseUrl}persons`, newObject)
  return request.then(response => response.data)
}

const handleGetAll = async () => {
  const request = axios.get(`${baseUrl}db`)
  return request.then(response => response.data)
}

const handleDelete = async (id) => {
  const request = axios.delete(`${baseUrl}persons/${id}`)
  return request.then(response => response.data)
}

const handleUpdate = (id, newObject) => {
  const request = axios.put(`${baseUrl}persons/${id}`, newObject)
  return request.then(response => response.data)
}

export default {
  handleCreate,
  handleGetAll,
  handleDelete,
  handleUpdate
}
