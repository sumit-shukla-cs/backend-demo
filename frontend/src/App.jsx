
import { useEffect, useState } from 'react'

import './App.css'

import './App.css'
import axios from 'axios'

function App() {
  const [university, setUniversity] = useState([])
  useEffect(() => {
    axios.get('/api/university')
      .then((response) => {
        setUniversity(response.data)
      })
      .catch((error) => {
        console.log('Error fetching data:', error)
      })

  })
  return (
    <>
  <h1>university</h1>
  <p>university: {university.length}</p>
    {
      university.map((university, index) => (
        <div key={index}>
          <h2>{university.domains}</h2>
          <h3>{university.country}</h3>
          <p>{university.name}</p>
          <p>{university.web_pages}</p>
          <p>{university.alpha_two_code}</p>
          <p>{university['state-province']}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
