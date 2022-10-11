import { useState, useCallback, useRef } from "react";

const initialTodo = [
    {
        id: 1,
        text: "asd",
    },
];
const App = () => {
    const [todos, setTodos] = useState(initialTodo);
    const [input, setInput] = useState("");
    const nextId = useRef(2);
    const onSubmit = useCallback(
        (e) => {
            const todo = {
                id: nextId.current,
                text: input,
            };
            setInput("");
            setTodos(todos.concat(todo));
            nextId.current += 1;
            e.preventDefault();
        },
        [input, todos]
    );
    const onChange = useCallback((e) => {
        setInput(e.target.value);
    }, []);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={input}
                    placeholder="값을 입력하세요"
                    onChange={onChange}
                />
                <button></button>
            </form>
            {todos.map((todo) => (
                <li key={todo.id} text={todo.text}>
                    {todo.text}{" "}
                </li>
            ))}
        </div>
    );
};

export default App;
