import React from 'react'
import {LoginContainer, FormContainer, StyledImg, Header, StyledInput, StyledForm, StyledButton} from "./Login.style"
import meal from "../../assets/meal.svg"

const Login = () => { 
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal}/>
        <Header>
          {"<CW/>"} Recipe
        </Header>
        <StyledForm>
        <StyledInput placeholder='Enter Username' type="text"/>
        <StyledInput placeholder='Enter Password' type="password"/>
        <StyledButton>          
          Login
          </StyledButton>
        </StyledForm>        
      </FormContainer>
    </LoginContainer>
  )
}

export default Login