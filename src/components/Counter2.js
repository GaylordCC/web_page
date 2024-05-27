import React, {useState} from "react";

export default function Counter2() {
    const [count, setCount] = useState(0)
    const initialCount = 0
    const Increment =()=>{
        // setCount(count+1)
    for(let i=0; i<5; i++)
        setCount(prevCount => prevCount+1)
    }
    const Decrement =()=>{
        setCount(count-1)
    }
    const Reset =()=>{
        setCount(initialCount)
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <div>
                <button onClick={Reset}>Reset</button>
            </div>
        </div>
    )
}