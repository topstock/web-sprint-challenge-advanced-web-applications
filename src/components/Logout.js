import React, { useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Logout = () => {
  useEffect(()=>{
    console.log(localStorage.getItem('token'));
      axios.post('http://localhost:5000/api/logout')
        .then(res => localStorage.removeItem('token'))
        .catch(err => console.error(err));
  },[]);
  
  if (localStorage.getItem('token')) {
    return( <div> Logging out... </div>);
  } else {
    return(<Redirect to="/login" />);
  }
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.