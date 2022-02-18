import React, {FunctionComponent} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
}

const UserItem: FunctionComponent<UserItemProps> = ({user}) => {
    return (
        <div>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p> проживает в городе
            <p>{user.address.city}</p> на улице
            <p>{user.address.street}</p> в квартире
            <p>{user.address.suite}</p>
        </div>
    );
};

export default UserItem;