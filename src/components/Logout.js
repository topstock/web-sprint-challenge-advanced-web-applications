import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const {push} = useHistory();
  
  useEffect(()=>{
    localStorage.removeItem('token');
    console.log(localStorage.getItem('token'));
      axios.post('http://localhost:5000/api/logout', {
          authorization: localStorage.getItem('token')
      })
        .then(res => localStorage.removeItem('token'))
        .catch(err => console.error(err));
      push('/');
  },[]);
  

 
  return( 
    <div> Logging out... </div>
  );
}


export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.