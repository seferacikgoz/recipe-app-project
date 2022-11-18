import axios from 'axios'
import React, {useState } from 'react'
import Header from '../../components/header/Header'

const Home = () => {
  const APP_ID = "1d5bc390"
  const APP_KEY = "c3cf9c4080833124490bfba97ca85484"
  const [query, setQuery] = useState("egg")
  const [selectedMeal, setSelectedMeal] = useState("breakfast")
  const [recipes, setRecipes] = useState("")
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    const {data} = await axios(url)
    
    setRecipes(data.hits)
    console.log(recipes)
  }

/*   useEffect(() => {
    getData()
  },[]) */


  return (
    <div>
      <Header setQuery={setQuery} setSelectedMeal={setSelectedMeal} mealType={mealType} getData={getData}/>
    </div>
  )
}

export default Home
