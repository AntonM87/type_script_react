import React from 'react';
import {Card, CardVariant} from "./components/Card";

const App = () => {
    return (
        <div>
            <Card onClick={(message:string)=> console.log(message)} width='200px' height='200px' variant={CardVariant.outlined}>
                <button>Кнопка</button>
            </Card>
        </div>
    );
};

export default App;