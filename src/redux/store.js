// import {createStore} from 'redux'
// import rootReducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension';
// const composedEnhancers = composeWithDevTools()
// const store = createStore(rootReducer, composedEnhancers);
// export default store;

import { configureStore } from '@reduxjs/toolkit'

import toDoSlice from '../components/TodoList/ToDoSlice'
import filtersSlice from '../components/Filters/FiltersSlice'
const store = configureStore(
    {
        reducer: {
            filters: filtersSlice.reducer, // 'reducer' not 'reducers'
            toDoList: toDoSlice.reducer
        }
    }
)

export default store;