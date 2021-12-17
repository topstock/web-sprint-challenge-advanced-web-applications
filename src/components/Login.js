import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Redirect }  from 'react-router-dom';
import Logout from './Logout';

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
`
const PError = styled.p`
    color: darkred;
`

//Task List
//1. Build login form DOM from scratch, making use of styled components if needed. Make sure the username input has id="username" and the password input as id="password".
//2. Add in a p tag with the id="error" under the login form for use in error display.
//3. Add in necessary local state to support login form and error display.
//4. When login form is submitted, make an http call to the login route. Save the auth token on a successful response and redirect to view page.
//5. If the response is not successful, display an error statement. **a server provided error message can be found in ```err.response.data```**
//6. MAKE SURE TO ADD id="username", id="password", id="error" AND id="submit" TO THE APPROPRIATE DOM ELEMENTS. YOUR AUTOTESTS WILL FAIL WITHOUT THEM.

const Login = () => {
    const [ credentials, setCredentials ] = useState({ username:'', password:'' });
    const [ error, setError ] = useState('');
    const [ isLoggedIn, setIsLoggedIn ] = useState( localStorage.getItem('token') === true );


    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getToken();
    }

    const getToken = ()=> {
        axios.post('http://localhost:5000/api/login' , credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
        })
        .catch(err => {
            console.log(err);
            setError('Username or password is incorrect.');//setError(err.error));
        });
    }
    
    if (!localStorage.getItem('token')) { 
      return(
        <ComponentContainer>
          <ModalContainer>
            <h1>Welcome to Blogger Pro</h1>
            <h2>Please enter your account information.</h2>
            <FormGroup onSubmit={handleSubmit}>
              <Label>Username:
                <Input onChange={handleChange} type='text' id="username" name="username" value={credentials.username} />
              </Label>
              <Label>Password:
                <Input onChange={handleChange} type='text' id="password" name="password" value={credentials.password}/>
              </Label>
              <Button id="submit">Click to Login</Button>
             { error && <PError id='error'> {error} </PError>}
            </FormGroup>
          </ModalContainer>
        </ComponentContainer>);
      } else { 
        return(<Redirect to='/view' />); 
      }
}

export default Login;