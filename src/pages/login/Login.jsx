import React from 'react'
import {LoginContainer, FormContainer, StyledImg, Header, StyledInput, StyledForm, StyledButton} from "./Login.style"
import {useNavigate} from "react-router-dom"
import meal from "../../assets/meal.svg"

const Login = () => { 

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/")
  }



  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal}/>
        <Header>
          {"<CW/>"} Recipe
        </Header>
        <StyledForm onSubmit={handleSubmit}>
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