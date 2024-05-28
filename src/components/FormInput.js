import React, {useState} from "react";

export default function FormInput() {
        const [name, setName] = useState('')
        const [adress, setAdress] = useState('')
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
                <label>
                    Adress:
                    <input type="text"
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}
                    />
                </label>
            </div>

        </form>
    )
}