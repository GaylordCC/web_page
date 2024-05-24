import React from "react";

export default function ClickEvenHandler() {
    function clickHandler() {
        console.log('You clicked the action button')
    }
    return (
        <div>
            <button onClick={clickHandler}>Action</button>
        </div>
    )
}