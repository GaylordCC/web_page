import React, {useState} from "react";


export default function TitleComponent() {
        const[title, setTitle] = useState('React JS Project 2024')
    return(
        <div>
            <h1> {title} </h1>
            <button onClick={()=>setTitle('Ultimate React JS Hooks')}> Changes Title </button>
        </div>
    )
}