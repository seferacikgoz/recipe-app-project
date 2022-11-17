import React from 'react'
import "./Header.style"
import { Button, FoodInput, FormContainer, HeaderContainer, MainHeader, Select } from './Header.style'

const Header = ({setQuery}) => {
  return (
   <HeaderContainer>
    <MainHeader>
      Recipe App
    </MainHeader>

    <FormContainer>
      <FoodInput type="text" placeholder="Search"
      onChange={(e) => setQuery(e.target.value)}
      />

      <Button type='submit'>SEARCH</Button>

      <Select name="mealType" id='mealType'>

      </Select>
    </FormContainer>
   </HeaderContainer>
  )
}

export default Header
