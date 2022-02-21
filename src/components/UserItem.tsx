import React, {FunctionComponent} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: FunctionComponent<UserItemProps> = ({user, onClick}) => {
    return (
        <div className="wrapper">
            <div onClick={() => onClick(user)}>
                <p>{user.id}</p>
                <p>{user.name}</p>
                <p>{user.email}</p> проживает в городе
                <p>{user.address.city}</p> на улице
                <p>{user.address.street}</p> в квартире
                <p>{user.address.suite}</p>
            </div>
        </div>
    );
};

export default UserItem;