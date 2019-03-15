export const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

export const getTodos = () => {
    return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : ["Começando a brincar com Full dopamina"];
}