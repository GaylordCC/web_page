import React, {useState} from "react";

export default function FormInput() {
        const [name, setName] = useState('')
        console.log(name)
    return(
        <form>
            <div> 
                <label>
                    Name:
                    <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </div>

        </form>
    )
}