import axios from 'axios'
import React, { useState } from 'react'

const Home = () => {
  const APP_ID = "1d5bc390"
  const APP_KEY = "c3cf9c4080833124490bfba97ca85484"
  const [query, setQuery] = useState("")
  const [selectedmeal, setSelectedMeal] = useState("")

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  getData = async () => {
    const {data} =await axios(url)
  }

  return (
    <div>
      Home
    </div>
  )
}

export default Home
