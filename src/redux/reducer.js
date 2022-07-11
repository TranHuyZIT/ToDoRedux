const initState = {
    filter: {
        search: '',
        status: 'ALL',
        priority: []
    },
    todoList: [
    ]
}
const rootReducer = (state = initState, action) => {
    console.log(state, action);
    switch(action.type){
        case 'todoList/addTodo':
            return{
                ...state,
                todoList:[
                    ...state.todoList,
                    action.payload
                ]
            }
        case 'filters/searchTextChange':
            return{
                ...state,
                filter:{
                    ...state.filter,
                    search: action.payload
                }
            }
        default:
            return state;
    }   
}
export default rootReducer;