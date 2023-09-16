import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    return (
        <div className="App">

            <Todolist title={"What to learn"}/>
            <Todolist title={"Movies"}/>

            <input type="checkbox"/>
            <input type="date"/>
            <input placeholder={"it-incubator"}/>
        </div>
    );
}

export default App;
