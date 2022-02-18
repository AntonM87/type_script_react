import React, {FunctionComponent} from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FunctionComponent<TodoItemProps> = ({todo}) => {
    return (
        <div>
            <input type="checkbox" defaultChecked={todo.completed}/>
            {todo.id}, {todo.title}
        </div>
    );
};

export default TodoItem;