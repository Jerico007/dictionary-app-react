import React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import { fetchData } from '../Redux/Action/dictActions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
const SearchBox = () => {
    
    //dispatch methode
    const dispatch = useDispatch();


    //useState to handel input
    const [input , setInput] = useState("");


    //function to search Input
    function searchInput()
    {
        if(input !== "")
        {
          
          dispatch(fetchData(input.trim()));  
            setInput("");
        }
    }

    return (
        <div className="Search-box">
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter word to find meaning" value={input}
        onInput={(e)=>(setInput(e.target.value))}
      />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
     
        <Button variant="contained" onClick={searchInput} sx={{color:"white",backgroundColor:"black"}}>Search</Button>
    </Paper>

      </div>
    );
}

export default SearchBox;
