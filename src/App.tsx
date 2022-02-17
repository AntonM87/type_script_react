import React from 'react';
import {Card, CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";
import './styles.scss';

const App = () => {
        const users: IUser[] = [
            {
                id: 1,
                name: "Leanne Graham",
                email: "Sincere@april.biz",
                address: {
                    street: "Kulas Light",
                    suite: "Apt. 556",
                    city: "Gwenborough",
                    zipcode: "92998-3874",
                }
            },
            {
                id: 2,
                name: "Anton M",
                email: "anton.m.87@mail.ru",
                address: {
                    street: "Kalinina 556",
                    suite: "Apt. 556",
                    city: "Yekaterinburg",
                    zipcode: "92998-3874",
                }
            }
        ];
        return (
            <div>
                <Card onClick={showMessage} width='200px' height='200px' variant={CardVariant.outlined}>
                    <button>Кнопка</button>
                </Card>
                <UserList users={users}/>
            </div>
        );
    }
;

const showMessage = (message: string) => alert(message);

export default App;