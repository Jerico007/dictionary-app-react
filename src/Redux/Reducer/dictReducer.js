import { SETDATA, SETERROR, FETCHINGDATA } from "../Action/actions";

const initial = {
  data: "",
  fetching: false,
  error: null,
  historyData :[],
};

const dicReducer = (state = initial, action) => {
  if (action.type === SETDATA) {

    const {historyData } = state;
    let history = [...historyData];
      
    
     if(!history.includes(action.payLoad[0].word))
     {
      history.push(action.payLoad[0].word);
     }
      return {
        ...state,data:action.payLoad,fetching:false,error:null ,historyData:[...history]
      }
  }
  if (action.type === SETERROR) {
    return { ...state, data:"", error: action.payLoad, fetching: false };
  }
  if(action.type === FETCHINGDATA)
  {
    return{...state,data:"",fetching:true,error : null}
  }
  return state;
};

export default dicReducer;