import { useState } from "react";

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    function handleSave() {
        editTodo(todo.id, editText);
        setIsEditing(false);
    }

    if (isEditing) {
        return (
            <li>
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleSave}>💾</button>
                <button onClick={() => setIsEditing(false)}>🚫</button>
            </li>
        );
    }

    return (
        <li>
            <span
                onClick={() => toggleTodo(todo.id)}
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer",
                    marginRight: "10px"
                }}
            >
                {todo.text}
            </span>
            <button onClick={() => setIsEditing(true)}>✏️</button>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
        </li>
    );
}


export default TodoItem;