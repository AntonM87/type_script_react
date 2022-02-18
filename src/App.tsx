import React, {useEffect, useState} from 'react';
import {Card, CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./types/types";
import './styles.scss';
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventExample from "./components/EventExample";

const App = () => {
        const [users, setUsers] = useState<IUser[]>([]);
        const [todos, setTodos] = useState<ITodo[] >([]);

        useEffect(() => {
            fetchUsers();
            fetchTodos();
        }, []);

        async function fetchUsers() {
            try {
                const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch (e) {
            }
        }

        async function fetchTodos() {
            try {
                const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
                setTodos(response.data);
            } catch (e) {
            }
        }

        return (
            <div>
                <EventExample/>
                <Card onClick={showMessage} width='200px' height='200px' variant={CardVariant.outlined}>
                    <button>Кнопка</button>
                </Card>
                <List
                    items={users}
                    renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
                />
                <List
                    items={todos}
                    renderItem={(todo:ITodo) => <TodoItem todo={todo} key={todo.id}/>}
                />

            </div>
        );
    }
;

const showMessage = (message: string) => alert(message);

export default App;