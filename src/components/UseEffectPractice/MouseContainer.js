import React, {useState} from "react";
import CleanEffect from "./CleanEffect";

export default function MouseContainer() {
        const [display, setDisplay] = useState(true)
    return(
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            {display && <CleanEffect />}
        </div>
    )
}