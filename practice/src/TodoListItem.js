const TodoListItem = ({ todo }) => {
    const { text } = todo;
    return (
        <div>
            <span>{text}</span>
            <button>삭제 버튼</button>
        </div>
    );
};

export default TodoListItem;
