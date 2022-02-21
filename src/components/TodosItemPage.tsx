import React, {FunctionComponent, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

interface ITodoItemPageParams {
    id: string;
}

const TodosItemPage: FunctionComponent = () => {
    const [todo, setTodo] = useState<ITodo | null>();
    const params = useParams();
    const history = useNavigate();

    async function fetchTodo() {
        try {
            const response = await axios.get<ITodo>(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
            setTodo(response.data)
        } catch (e) {}
    }

    useEffect(() => {
        fetchTodo();
    })

    return (
        <div>
            <button onClick={() => history('/todos')}>Back</button>
            <h1>{todo?.title}</h1>
            <h2>{todo?.completed ? 'Закончено' : 'Незакончено'}</h2>
        </div>
    );
};

export default TodosItemPage;