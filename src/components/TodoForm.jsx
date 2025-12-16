import { useState } from "react";


function TodoForm({ addTodo }) {
    const [text, setText] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        if (!text) return;
        addTodo(text);
        setText("");
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a todo"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
}


export default TodoForm;