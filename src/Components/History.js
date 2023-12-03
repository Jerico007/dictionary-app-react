import React from "react";
import Navbar from "./Navbar";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/Action/dictActions";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
const History = () => {
  //store data
  const { historyData } = useSelector((state) => state);
  
  // console.log(historyData)
  const Navigate = useNavigate();
  
  const dispatch = useDispatch();
  
  const showData =(e)=>{
    dispatch(fetchData(e.target.innerText));
    Navigate("/");
  }

  return (
    <div>
      <Navbar />
      <Typography variant="h2" gutterBottom>
        Search History
      </Typography>
      {
        historyData.length > 0 ? ( <Box sx={{ boxShadow: "0px 0px 5px 1px black"  ,display:"flex",flexDirection:"column"}}>
        {historyData &&
          historyData.map(
            (val) =>
              val && (
                <Typography variant="h5" onClick={showData} gutterBottom sx={{textDecoration:"underline",cursor:"pointer", color:"blue",p:1}}>
               {val}
              </Typography>
              )
          )}
      </Box>):""
      }
     
    </div>
  );
};

export default History;
