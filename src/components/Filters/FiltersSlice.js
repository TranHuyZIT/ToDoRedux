// const initState = {
//         search: '',
//         status: 'All',
//         priority: []
// }
// const filtersReducer = (state = initState, action) => {
//     console.log(state, action);
//     switch(action.type){
//         case 'filters/searchTextChange':
//             return{
//                 ...state,
//                 search: action.payload
//             }
//         case 'filters/statusChange':
//             return{
//                 ...state,
//                 status: action.payload
//             }
//         case 'filters/prioritiesChange':
//             return {
//                 ... state,
//                 priority: action.payload
//             }
//         default:
//             return state;
//     }   
// }
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState:{
                    search: '',
                    status: 'All',
                    priority: []
                },
    reducers:{
        searchTextChange: (state, action)=>{
            state.search = action.payload;
        },
        statusChange:(state,action)=>{
            state.status = action.payload;
        },
        prioritiesChange:(state, action)=>{
            state.priority = action.payload;
        }
    }

})

export default filtersSlice;