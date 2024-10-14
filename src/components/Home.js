import React,  { useState }  from "react";
import '../css/Button.css';


import { Link, useLocation, useNavigate } from "react-router-dom";
const Home = () => {
    
  return (
    <>
      
       
        <Link to="/login" class="btn btn1 " >Log In</Link>
        <Link to="/signup" class="btn btn2">Sign Up</Link>
        
    </>
  );
};

export default Home;
