import { combineReducers } from "redux";
import todoReducer from "../redux/todos/reducer";
import filterReducer from "../redux/todos/reducer";


const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
});

export default rootReducer;