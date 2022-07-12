export const addTodoAction = (data) => (
    {
        type: 'todoList/addTodo',
        payload: data
    }
)

export const setCompleteToDoAction = (data) => (
    {
        type: 'todoList/setCompleteToDo',
        payload: data
    }
)

export const filterSearchChangeAction = (data) => (
    {
        type: 'filters/searchTextChange',
        payload: data
    }
)

export const filterStatusChangeAction = (data) => (
    {
        type: 'filters/statusChange',
        payload: data
    }
)

export const filterPrioritiesChangeAction = (data) => (
    {
        type: 'filters/prioritiesChange',
        payload: data
    }
)

