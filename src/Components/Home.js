import React from "react";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import { useSelector, } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Home = () => {
  //store data
  const { data, fetching, error} = useSelector((state) => state);

  console.log(data);

  return (
    <div>
      <Navbar />
      <SearchBox />
      {fetching ? (
        <Box sx={{ display: "flex", justifyContent: "center" ,p:1}}>
          <CircularProgress />
        </Box>
      ) : (
        ""
      )}
      {
        error && <Typography variant="h2" sx={{textAlign:"center"}} gutterBottom>
        {error}
      </Typography>
      }
      {data   &&  data.map((data)=>(
          <Box sx={{ width: "70%", borderRadius: "7px", padding: 3, marginTop:2, marginLeft:4, boxShadow: "0px 0px 5px 1px black" }}>
          <Typography variant="h2" gutterBottom>
            {data.word}
          </Typography>
          <div>
            {/* Word name and audio */}
            {data.phonetics &&  data.phonetics.map((val) => (
              <div>
                <p>{val.text !== "" ? val.text : ""}</p>
                {val.audio !== "" ? <audio controls src={val.audio} /> : ""}
              </div>
            ))}
            {/* Word partofSpeech as noun/verb and meaning */}
            {
            data.meanings && data.meanings.map((val)=>(
              <div>
                 <Typography variant="h5" gutterBottom>
                {val.partOfSpeech}
              </Typography>
              <ul>
              {val.definitions.length > 0
                ? val.definitions.map((val) => (
                    <li>
                      <Typography variant="p" gutterBottom>
                        {val.definition}
                      </Typography>
                    </li>
                  ))
                : ""}
            </ul>
              </div>
            )) 
            
            }           
          </div>
        </Box>
      ))
        
      }
    </div>
  );
};

export default Home;
