const initState = {
    filter: {
        search: '',
        status: 'ALL',
        priority: []
    },
    todoList: [
        {id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'},
        {id: 2, name: 'Learn Redux', completed: false, priority: 'High'},
        {id: 3, name: 'Learn Javascript', completed: false, priority: 'Low'},
    ]
}
const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'todoList/addTodo':
            return{
                ...state,
                todoList:[
                    ...state.todoList,
                    action.payload
                ]
            }
        default:
            return state;
    }   
}
export default rootReducer;