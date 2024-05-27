import React, {useState} from "react";


export default function Counter3() {
    const [employee, setEmployee] = useState({name: "", country: ""})
    return(
        <div>
            <input type="text"
                value={employee.name}
                onChange={(e)=>setEmployee({ ...employee, name: e.target.value})}
            ></input>
            <input type="text"
                value={employee.country}
                onChange={(e)=>setEmployee({ ...employee, country: e.target.value})}
            ></input>
            <div>
                <p>My name is {employee.name}</p>
                <p>and I am from {employee.country}</p>
            </div>
        </div>
    )
}