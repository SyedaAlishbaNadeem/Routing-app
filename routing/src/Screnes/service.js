import React from "react";
import Button from '@mui/material/Button';
import {useNavigate }from 'react-router-dom';

function Service() {

  const navigate = useNavigate();


  return (
    <>
     

     <h1>   <Button variant="contained"> Service </Button> </h1>
     <h1>   <Button  variant="outlined" onClick={ () => navigate( "/") }   >Go to home </Button> </h1>


<img src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />

    </>
  );
}

export default Service;
