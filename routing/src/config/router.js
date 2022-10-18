import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from '../Screnes/home';
import About from '../Screnes/about';
import Contact from '../Screnes/contact';
import Service from '../Screnes/service';
import Profile from '../Screnes/profile';
import Notfound from '../Screnes/notfound';
import Album from '../components/Album';
import Dashboard from '../Screnes/dashboard';





export default function AppRouter() {
  return (
    <Router>
      <div>
    <NavLink className="link" to="/" > Home </NavLink>
    <NavLink  className="link" to="About" > About </NavLink>
    <NavLink className="link" to="Contact" > Contact </NavLink>
    <NavLink className="link" to="Service" > Service </NavLink>
    <NavLink className="link" to="Album" > Landing page </NavLink>
     <NavLink  className="link"  to="dashboard"> Dashboard </NavLink>   
 
  

    </div>


<Routes>
<Route path="/" element={<Home/>} />
<Route path="About" element={<About/>} />
<Route path="Contact" element={<Contact/>} />
<Route path="Service" element={<Service/>} />
<Route path="Album" element={<Album/>} />
<Route path="profile/:userName" element={<Profile/>} />
<Route path="dashboard/*" element={<Dashboard/>} />




<Route  path="*" element={<Notfound/>}/>
</Routes>


    </Router>
  );
}
