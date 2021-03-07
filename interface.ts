/*function showTodo(todo:{title: string, text: string}) {
    console.log(todo.title + ': ' + todo.text);
}

let myTodo = {title: 'Go', text: 'Go to Delhi'}

showTodo(myTodo)
*/

interface Todo {
    title: string,
    text: string
}
function showTodo(todo:Todo) {
    console.log(todo.title + ': ' + todo.text);
}
let myTodo = {title: 'Go', text: 'Go to Delhi'}

showTodo(myTodo)