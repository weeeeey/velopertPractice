import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoListItem todo={todo} key={todo.id}>
                    {todo.text}
                </TodoListItem>
            ))}
        </div>
    );
};

export default TodoList;
