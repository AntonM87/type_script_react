import React, {FunctionComponent} from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo;
    onClick: (todo: ITodo) => void
}

const TodoItem: FunctionComponent<TodoItemProps> = ({todo, onClick}) => {
    return (
        <div className='wrapper'>
            <div className="wrapper">
                <input type="checkbox" defaultChecked={todo.completed}/>
                <div className='wrapper' onClick={() => onClick(todo)}>
                    {todo.id}, {todo.title}
                </div>
            </div>
        </div>
    );
};

export default TodoItem;