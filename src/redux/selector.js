import { createSelector } from "reselect";


const toDoListSelector = (state) => {
    
    return state.todoList;
}

const searchTextFilterSelector = (state) => {
    return state.filter.search;
}
export const remainingToDoSelector = createSelector(toDoListSelector, searchTextFilterSelector, (toDoList, searchText)=>{
    return toDoList.filter((toDo) => {
        return toDo.name.includes(searchText);
    })
} )