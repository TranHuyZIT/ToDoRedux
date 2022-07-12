const initState = []

const toDoReducer = (state = initState, action) => {
    switch(action.type){
        case 'todoList/addTodo':
            return [
                ...state,
                action.payload
            ]
        case 'todoList/setCompleteToDo':
            const newToDoList = [...state].map((toDo) => {
                console.log(toDo.name === action.payload.name);
                if (toDo.name === action.payload.name){
                    console.log({
                        ... toDo,
                        completed: action.payload.completed
                    });
                    return{
                        ... toDo,
                        completed: action.payload.completed
                    }
                }
                return toDo;
            })
            return newToDoList;
        default:
            return state;
    }   
}
export default toDoReducer;