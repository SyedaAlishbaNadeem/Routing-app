import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Routes , Router, NavLink, Link, Navigate , useNavigate } from "react-router-dom";
import Feedback from "./dashboard_screen/feedback";
import Messages from "./dashboard_screen/messages";
import Notifications from "./dashboard_screen/notifications";
import Test from "./dashboard_screen/test"
import Home from './home';
import ForumIcon from '@mui/icons-material/Forum';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import AddHomeIcon from '@mui/icons-material/AddHome';
import SpeedIcon from '@mui/icons-material/Speed';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Data from './dashboard_screen/data';
import Cards from './dashboard_screen/cards';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

const navigate = useNavigate();

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
            {
            route: 'messages',
            name: 'Messages',
            icon: () => <ForumIcon/>,
        },
            {
            route: 'notifications',
            name: 'Notifications',
            icon: () => <CircleNotificationsIcon/>,
        },
            {
            route: 'feedback',
            name: 'Feedback',
            icon: () => <ThumbUpAltIcon/>,
            
        },
            {
            route: '/',
            name: 'Home',
            icon: () => <AddHomeIcon/>,
        },
            {
            route: 'test',
            name: 'Test',
            icon: () => <SpeedIcon/>,
        },
            {
            route: 'data',
            name: 'Data',
            icon: () => <ContentPasteIcon />,
        },
        //     {
        //     route: 'cards',
        //     name: 'Cards',
        //     icon: () => <ContentPasteIcon />,
        // },

        ].map((text, index) => (
          <ListItem    key={index} disablePadding>
            <ListItemButton 
            onClick={ ()=>{
                navigate (text.route)
             } }>
              <ListItemIcon>
                {text.icon()}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
{/*   
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        

        <div>
    <NavLink className="link" to="home" > </NavLink>
    <NavLink  className="link" to="feedback" >   </NavLink>
    <NavLink className="link" to="test" > </NavLink>
    <NavLink className="link" to="messages" > </NavLink>
    <NavLink className="link" to="notifications" > </NavLink>
    <NavLink className="link" to="data"> </NavLink>
    {/* <NavLink className="link" to="cards"> </NavLink> */}

    </div>


<Routes>
    <Route  path="/" element={<Home/>} />
<Route path="feedback"  element={<Feedback />} />
<Route path="test" element={<Test/>} />
<Route path="messages" element={<Messages/>} />
<Route path="notifications" element={<Notifications/>} />
<Route path="data" element={<Data/>}/>
<Route path="cards" element={<Cards />}/>


</Routes > 
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

































// import React from "react";
// import { Route, Routes , Router, NavLink, Link } from "react-router-dom";
// import Feedback from "./dashboard_screen/feedback";
// import Messages from "./dashboard_screen/messages";
// import Notifications from "./dashboard_screen/notifications";
// import Test from "./dashboard_screen/test"
// import Board from "./dashboard_screen/board";




// function Dashboard() {
    
//     return <>
//     <h1> Dashboard Nested </h1>







//     <div>
//     <NavLink className="link" to="/" > Home </NavLink>
//     <NavLink  className="link" to="feedback" > Feedback  </NavLink>
//     <NavLink className="link" to="test" > Test </NavLink>
//     <NavLink className="link" to="messages" > Messages</NavLink>
//     <NavLink className="link" to="notifications" > Notifications  </NavLink>
//     <NavLink className="link" to="board">Board </NavLink>
//     </div>





// <Routes>
// <Route path="feedback"  element={<Feedback />} />
// <Route path="test" element={<Test/>} />
// <Route path="messages" element={<Messages/>} />
// <Route path="notifications" element={<Notifications/>} />
// <Route path="board" element={<Board/>}/>


// </Routes > 


//     </>

  
// }
// export default Dashboard;

