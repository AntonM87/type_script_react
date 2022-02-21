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
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodosItemPage from "./components/TodosItemPage";

const App = () => {
        return (
            <BrowserRouter>
                <Link to="/users">users</Link>
                <br/>
                <Link to="/todos">todos</Link>

                <Routes>
                    <Route path='/users' element={<UserPage/>}/>
                    <Route path='/todos' element={<TodosPage/>}/>
                    <Route path='/users/:id' element={<UserItemPage/>}/>
                    <Route path='/todos/:id' element={<TodosItemPage/>}/>

                    {/*<EventExample/>*/}
                    {/*<Card onClick={showMessage} width='200px' height='200px' variant={CardVariant.outlined}>*/}
                    {/*    <button>Кнопка</button>*/}
                    {/*</Card>*/}
                </Routes>
            </BrowserRouter>
        );
    }
;

const showMessage = (message: string) => alert(message);

export default App;