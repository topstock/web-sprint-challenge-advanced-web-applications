import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = () => {
  const {push} = useHistory();
  
  useEffect(()=>{
      axiosWithAuth().post('http://localhost:5000/api/logout')
        .then(res => {
          localStorage.removeItem('token');
          push('/');
        })
        .catch(err => console.error(err));
  },[]);
  

 
  return( 
    <div> Logging out... </div>
  );
}


export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.