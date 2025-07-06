import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [API, setAPI] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/api')
      .then((response) => {
        setAPI(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })

  })
  return (
    <>
  <h1>API</h1>
  <p>API: {API.length}</p>
    {
      API.map((item, index) => (
        <div key={index}>
          <h2>{API.domains}</h2>
          <h3>{API.country}</h3>
          <p>{API.name}</p>
          <p>{API.web_pages}</p>
          <p>{API.alpha_two_code}</p>
          <p>{API['state-province']}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
