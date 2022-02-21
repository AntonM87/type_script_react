import React, {FunctionComponent, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

interface IUserItemPageParams {
    id: string;
}

const UserItemPage: FunctionComponent = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams();
    const history = useNavigate();

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            setUser(response.data)
        } catch (e) {}
    }

    useEffect(() => {
        fetchUser();
    })

    return (
        <div>
            <button onClick={() => history('/users')}>Back</button>
            <h1>Страница пользователя{user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city};
            </div>
        </div>
    );
};

export default UserItemPage;