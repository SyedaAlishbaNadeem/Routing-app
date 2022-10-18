import { Card, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom'


export default function Cards() {
let location = useLocation();




  return (
    <div>
<h1> Cards </h1>

<Grid container  item spacing={3}>
<Grid item md={4} lg={3} sm={4} xs={12} />  
<Grid item md={6} lg={6} sm={6} xs={12}  >
<Card className = "card" >
<CardMedia  
component="img"
image = {location.state.image}
alt = "image"
/>
</Card>
</Grid>

<Grid container  item spacing={2} >
<Grid item md={4} lg={3} sm={4} xs={12} />  
<Grid item md={6} lg={6} sm={6} xs={12}  >
<Typography className="text-black" variant="h6" > Title: {location.state.title}</Typography>
<Typography  className="text-black" variant="h6"> Price: {location.state.price}</Typography>
<Typography  className="text-black" variant="P"> Description: {location.state.description}</Typography>
</Grid>


</Grid>
</Grid>





    </div>
  )
}
