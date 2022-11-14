import React from 'react'
import {LoginContainer, FormContainer, StyledImg, Header} from "./Login.style"
import meal from "../../assets/meal.svg"

const Login = () => { 
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal}/>
        <Header>
          {"<CW/>"} Recipe
        </Header>

      </FormContainer>
    </LoginContainer>
  )
}

export default Login