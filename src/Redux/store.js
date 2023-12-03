import { createStore ,applyMiddleware} from "redux";
import dicReducer from "./Reducer/dictReducer";
import thunk from "redux-thunk";
const store = createStore(dicReducer,applyMiddleware(thunk));

export default store;