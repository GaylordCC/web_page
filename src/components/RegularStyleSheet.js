import React from "react";
import './myStyles.css';


export default function RegularStyleSheet(props) {
        const style1 = props.primary ? 'primary' : 'secondary'
    return(
        <div>
            <h1 className={style1}>Here we define some css styles</h1>
        </div>
    )
}