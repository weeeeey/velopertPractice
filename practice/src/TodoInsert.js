import { useState, useCallback } from "react";

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState("");

    const onSubmit = (e) => {
        onInsert(value);
        setValue("");
        e.preventDefault();
    };
    const onChange = useCallback((e) => setValue(e), []);
    return (
        <form onSubmit={onSubmit}>
            <input
                value={value}
                placeholder="할 일 적으시오"
                onChange={onChange}
            />
            <button type="submit"></button>
        </form>
    );
};

export default TodoInsert;
