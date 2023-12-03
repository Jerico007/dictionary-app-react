import axios from "axios";


import { SETDATA,FETCHINGDATA,SETERROR} from "./actions";


export const set_data = (data)=>{
    return {
        type:SETDATA,
        payLoad:data
    }
}


export const fetching_data = ()=>{
    return {
        type : FETCHINGDATA
    }
}


export const set_error = (data)=>{
    return{
        type : SETERROR,
        payLoad : data
    }
}

//Fetch Data function

export const fetchData = (word)=>{
    
    return async function (dispatch){
        dispatch(fetching_data());
            // dispatch(set_data(""));
        try{
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            // console.log(response.data);
            dispatch(set_data(response.data));
        }
        catch(e){
            dispatch(set_error(e.message));
        }
       
    }
}