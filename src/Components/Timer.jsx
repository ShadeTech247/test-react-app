import { useEffect, useState } from "react";

function Timer() {
    const[timer,Settimer] = useState(0)
    useEffect(() => {
        const id = setInterval(() => {
            Settimer(timer => timer + 1);
        }, 1000);

        return () => clearInterval(id);
    }, []);
    return(
        <p>You have spent {timer} seconds on this website</p>
    )
}

export default Timer;
