import React from "react";
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';


function About() {
  const navigate = useNavigate();


  return (
    <>
      <h1>   <Button variant="contained"> About </Button> </h1>
      <h1>   <Button  variant="outlined" onClick={ ()=> navigate( "/") } > Go to home </Button> </h1>

<img src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />




    </>
  );
}

export default About;
