// const initState = []

// const toDoReducer = (state = initState, action) => {
//     switch(action.type){
//         case 'todoList/addTodo':
//             return [
//                 ...state,
//                 action.payload
//             ]
//         case 'todoList/setCompleteToDo':
//             const newToDoList = [...state].map((toDo) => {
//                 console.log(toDo.name === action.payload.name);
//                 if (toDo.name === action.payload.name){
//                     console.log({
//                         ... toDo,
//                         completed: action.payload.completed
//                     });
//                     return{
//                         ... toDo,
//                         completed: action.payload.completed
//                     }
//                 }
//                 return toDo;
//             })
//             return newToDoList;
//         default:
//             return state;
//     }   
// }
// export default toDoReducer;
import { createSlice } from "@reduxjs/toolkit";
const priorityMapping = {
    High: 10,
    Medium: 9,
    Low: 8
  }
const toDoSlice = createSlice({
    name: 'todoList',
    initialState: [],
    reducers:{
        addTodo: (state, action)=>{
            state.push(action.payload);
        },
        setCompleteToDo: (state, action)=>{
            const toDo = state.find((toDo) => toDo.name === action.payload.name);
            toDo.completed = action.payload.completed
        },
        deleteToDo: (state, action) => {
            state.map((toDo, index) => {
                if (toDo.name === action.payload){
                    state.splice(index, 1);
                    return;
                }
            });

        },
        sortToDo: (state, action) => {
            state.sort(function(a, b){return priorityMapping[b.priority] - priorityMapping[a.priority]});
        }
    }
})
export default toDoSlice;