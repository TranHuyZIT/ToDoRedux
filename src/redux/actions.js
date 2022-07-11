export const addTodoAction = (data) => (
    {
        type: 'todoList/addTodo',
        payload: data
    }
)

export const filterSearchChangeAction = (data) => (
    {
        type: 'filters/searchTextChange',
        payload: data
    }
)