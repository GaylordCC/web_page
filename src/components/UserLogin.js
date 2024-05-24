import React from "react";

export default function UserLogin() {
        const isLoggedIn = true
    return(
        <div>
            {
                // isLoggedIn ? <h1>Welcome to Gaylord Carrillo C project</h1>
                //  : <h2>You can not access this project</h2>
            }
            {
                isLoggedIn && <h1>Hello, You are Logged In</h1>
            }
        </div>
    )
}