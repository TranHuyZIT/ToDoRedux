import { combineReducers } from "redux";
import toDoReducer from "../components/TodoList/ToDoSlice";
import filtersReducer from '../components/Filters/FiltersSlice';

const rootReducer = combineReducers(
    {
        filters: filtersReducer,
        toDoList: toDoReducer
    }
)
export default rootReducer;