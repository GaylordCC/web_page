import React, {useEffect, useState} from "react";

export default function ConditionallyEffect(){
        const [count, setCount] = useState(0)
        const [name, setName] = useState("")

        useEffect(()=>{
            document.title = `you clicked: ${count} times`
            console.log('useEffect is called')
        },[count])
    return(
        <div>
            {count}
            <button onClick={()=>setCount(count+1)}></button>
            <Input 
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
        </div>
    )
}