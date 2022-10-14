import React from "react";
import { Route, Routes , Router, NavLink } from "react-router-dom";
import Feedback from "./dashboard_screen/feedback";
import Messages from "./dashboard_screen/messages";
import Notifications from "./dashboard_screen/notifications";
import Test from "./dashboard_screen/test"
import Board from "./dashboard_screen/board";




function Dashboard() {
    
    return <>
    <h1> Dashboard Nested </h1>

    <div>
    <NavLink className="link" to="/" > Home </NavLink>
    <NavLink  className="link" to="feedback" > Feedback </NavLink>
    <NavLink className="link" to="test" > Test </NavLink>
    <NavLink className="link" to="messages" > Messages </NavLink>
    <NavLink className="link" to="notifications" > Notifications </NavLink>
    <NavLink className="link" to="board"> Board </NavLink>
    </div>





<Routes>
<Route path="feedback"  element={<Feedback />} />
<Route path="test" element={<Test/>} />
<Route path="messages" element={<Messages/>} />
<Route path="notifications" element={<Notifications/>} />
<Route path="board" element={<Board/>}/>


</Routes > 


    </>

  
}
export default Dashboard;