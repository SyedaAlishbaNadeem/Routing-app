import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardMedia, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Data() {
let [arr, setArr] = useState([]);
let navigate = useNavigate();

let getData = () => {
  axios.get('https://fakestoreapi.com/products')
  .then
  ((success) => {
console.log(success);
setArr([...success.data]);

  })
  .catch((error) =>{
console.log(error);
  });
};



let sendData = (e) => {
  console.log(e);
  navigate('../cards', {
    state: e
  });
}



useEffect( () => {
  getData();
},[])


// let postData = () => {
// let obj = {
// body: "abc",
// title: "alishba",
// userId:9,
// };
//   axios.post('https://jsonplaceholder.typicode.com/posts', obj).then
//   ((ress) => {
// console.log(ress);

//   })
//   .catch((error) =>{
// console.log(error);
//   });
// }






  return (
   

//download npm i axios

 <div> All Data of Axios

<br/>
{/* <button onClick ={()=> postData()} > Get data </button> */}




<Grid container item  spacing={3}>

{arr.map((e, i)=> {

return <Grid item md={4} lg={3} sm={6} xs={12}  >
<Card  onClick={()=> sendData(e)} >
<Typography variant="h5" > {e.category} </Typography>
<CardMedia  
component="img"
image = {e.image}
alt = "image"
height = "250px"
/>
<Typography variant="P"> Price: {e.price}</Typography>
</Card>
</Grid>
})}
</Grid>



</div>













  )
}
