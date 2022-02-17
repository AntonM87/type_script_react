import React, {FunctionComponent} from 'react';
import {IUser} from "../types/types";

interface UserListProps {
    users: IUser[];
}

const UserList: FunctionComponent<UserListProps> = ({users}) => {
    return (
        <div>
            {users.map(user => <div>
                <p>{user.name}</p> <p>{user.email}</p> проживает в городе <p>{user.address.city}</p> на
                улице <p>{user.address.street}</p> в квартире <p>{user.address.suite}</p>
            </div>)}
        </div>
    );
};

export default UserList;