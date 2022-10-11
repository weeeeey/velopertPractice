const TodoTemplate = ({ children }) => {
    return (
        <div>
            <div>Todo list</div>
            <div>{children}</div>
        </div>
    );
};

export default TodoTemplate;
