import React, { useState } from "react";
import Button from '@mui/material/Button';
import {Navigate, useNavigate} from  'react-router-dom';




function Home() {
  let navigate = useNavigate();

let moveData = (data)=> {
  navigate('contact', {
    state:data
  })

};

const [list, setList] = useState ([
  {
    id:1,
    title:"ABC"
  },
  {
    id:2,
    title:"DEF"
  },
  {
    id:3,
    title:"GHI"
  },
  {
    id:4,
    title:"JKL"
  }
]);








  return (
    <>
      
     
      <h1>   <Button variant="contained"> Home </Button> </h1>
      <h1 > <Button variant="outlined"   onClick={moveData}  > Go to contact </Button> </h1>   





{ list.map((e,i)=> <p key={i} onClick={ ()=> moveData(e)}> {e.title} </p>)} 

<img   src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />



    </>
  );
}

export default Home;
