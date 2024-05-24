import React from "react";

export default function DemoComponent (props) {
    return(
        <div>
            <h1> I am {props.name} from {props.country} </h1>
            <h2> {props.children} </h2>
        </div>
    )
}