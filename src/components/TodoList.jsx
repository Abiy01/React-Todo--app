import TodoItem from "./TodoItem";


function TodoList({ todos, deleteTodo, toggleTodo, editTodo }) {
    if (todos.length === 0) {
        return <p>No todos yet 🎉</p>;
    }


    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                />
            ))}
        </ul>
    );
}


export default TodoList;