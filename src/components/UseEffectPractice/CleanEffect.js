import React, {useState, useEffect} from "react";

export default function CleanEffect() {
        const [x, setX] = useState(0)
        const [y, setY] = useState(0)

        const LogMousePosition =(e)=>{
            console.log('This is mouse event')
            setX(e.clientX)
            setY(e.clientY)
        }

        useEffect(()=>{
            console.log('useEffect is called')
            window.addEventListener('mousemove', LogMousePosition)

            return () => {
                window.removeEventListener('mousemove', LogMousePosition);
                console.log('component is unmounted, and the code is clean')
            }
            
        }, [])
    return(
        <div>
            <p>Mouse Position</p>
            coordinates X,Y - {x}, {y}
        </div>
    )
}