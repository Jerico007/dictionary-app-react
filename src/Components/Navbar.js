import React from 'react';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='Navbar'>
             <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor:"black"}}>
        <Toolbar>
      
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dictionary App
          </Typography>
          <NavLink to={"/"}>
          <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink to={"/history"}>
              <Button color="inherit">History</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
}

export default Navbar;
