export const searchTodo = (state) => {
    return state.filters.search
} 

export const addTodoList = (state) => {
    const todosRemaining = state.todoList.filter(todo => {
        return todo.name.includes(state.filters.search)
    })

    return todosRemaining
} 