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
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const priorityMapping = {
    High: 10,
    Medium: 9,
    Low: 8
  }
const toDoSlice = createSlice({
    name: 'todoList',
    initialState: {status: 'idle', todos: []},
    reducers:{
        addTodo: (state, action)=>{
            state.todos.push(action.payload);
        },
        setCompleteToDo: (state, action)=>{
            const toDo = state.todos.find((toDo) => toDo.name === action.payload.name);
            toDo.completed = action.payload.completed
        },
        deleteToDo: (state, action) => {
            state.todos.map((toDo, index) => {
                if (toDo.name === action.payload){
                    state.todos.splice(index, 1);
                    return;
                }
            });

        },
        sortToDo: (state) => {
            state.todos.sort(function(a, b){return priorityMapping[b.priority] - priorityMapping[a.priority]});
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.status = 'idle';
            state.todos = action.payload;
        })
        .addCase(addNewTodo.fulfilled, (state,action) => {
            state.todos.push(action.payload);
        })
    }
})
export default toDoSlice;

export const fetchTodos = createAsyncThunk('/api/todos', async () => {
    const res = await fetch('/api/todos');
    const data = await res.json();
    return data.todos;
})
export const addNewTodo = createAsyncThunk('/api/addtodo', async (newTodo) => {
    const res = await fetch('/api/addtodo', {
        method: 'POST',
        body: JSON.stringify(newTodo)
    })
    console.log(res);
    const data = await res.json();
    return data.todos;
})