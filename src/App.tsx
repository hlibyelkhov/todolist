import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    let tasks1 = [
        { id: 1, title: "CSS", isDone: true },
        { id: 1, title: "JS", isDone: true },
        { id: 1, title: "React", isDone: false }
    ]

    let tasks2 = [
        { id: 1, title: "Terminator", isDone: true },
        { id: 1, title: "XXX", isDone: false },
        { id: 1, title: "Gentelments of fortuna", isDone: true }
    ]

    return (
        <div className="App">
            <Todolist title={"What to learn"}/>
            <Todolist title={"Movies"}/>
        </div>
    );
}

export default App;
