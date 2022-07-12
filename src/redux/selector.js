import { createSelector } from "reselect";


const toDoListSelector = (state) => {
    
    return state.toDoList;
}

const searchTextFilterSelector = (state) => {
    return state.filters.search;
}

const statusFilterSelector = (state) => {
    return state.filters.status;
}
export const remainingToDoSelector = createSelector(toDoListSelector, searchTextFilterSelector, statusFilterSelector, (toDoList, searchText, status)=>{
    if (status === 'All'){
        return toDoList.filter((toDo) => {
            return toDo.name.includes(searchText);
        })
    }
    else{
        return toDoList.filter((toDo) => {
            return toDo.name.includes(searchText) && ((toDo.completed) && (status === 'Completed') ) || ((!toDo.completed) && (status === 'Todo'));
        })
    }
} )