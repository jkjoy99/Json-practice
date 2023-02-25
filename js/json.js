// 
function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))

}

function displayTodos(todos){
    const todoContanier = document.getElementById('todos-container')
    for(const todo of todos){
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
        <p>user: ${todo.userId}</p>
        <p>id: ${todo.id}</P>
        <h3>title: ${todo.title}</h3>
        <p>completed: ${todo.completed === true ? 'complete':'not complete'}</p>

        `;
        todoContanier.appendChild(todoDiv);
    }
}

loadTodos();