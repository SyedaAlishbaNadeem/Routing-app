import React from "react";
import Button from '@mui/material/Button';
import {useNavigate, useLocation} from 'react-router-dom';





function Contactt() {

const navigate = useNavigate();
const location = useLocation();

let clickEvent = () => {
  navigate('about');
}
console.log(location.state);

  return (
    <>

    <h1>   <Button variant="contained"> Contact   </Button> </h1>
    <h1>   <Button  variant="outlined" onClick={ () => navigate( "/") }   >Go to home </Button> </h1>

    <h1> <Button variant="outlined" onClick= {clickEvent} > go to about </Button></h1>




<img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29udGFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />


    </>
  );
}

export default Contactt;
