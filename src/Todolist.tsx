import React from "react";

// function sum(a:number, b:number {
//     alert(a + b);
// })
//
// sum(12, 14);

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsTitle = {
    title: string
    tasks: Array<TaskType>
}

export function Todolist(props: PropsTitle){ // props =  { title: "What to learn" }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={true}/><span>CSS&HTML</span></li>
                <li><input type="checkbox" checked={true}/><span>JS</span></li>
                <li><input type="checkbox" checked={false}/><span>React</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}