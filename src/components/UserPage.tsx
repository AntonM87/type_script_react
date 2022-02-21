import React, {FunctionComponent, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";
import {useNavigate} from "react-router-dom";

const UserPage: FunctionComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const history = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (e) {
        }
    }

    return (
        <List
            items={users}
            renderItem={(user: IUser) => <UserItem user={user} key={user.id} onClick={(user)=> history(`/users/${user.id}`)}/>}
        />
    );
};

export default UserPage;