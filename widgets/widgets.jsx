import { directive } from '@babel/types';
import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tab from './frontend/tab';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const main = React.createElement('div', null, 'React Main');
    ReactDOM.render(<Root />, root);
})

const Root = () => {
        return (
    <div>
            <Clock />
            <Tab />
    </div>
        )
}