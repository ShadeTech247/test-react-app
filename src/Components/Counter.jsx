import { useEffect, useState } from "react"

function Counter() {
    const [count, Setcount] = useState(0)
    useEffect(() => console.log(`count has changed to ${count}`),[count])

    return(
        <>
        <h4>Everytime the count changes, it is logged in the console</h4>
        <button onClick={() => Setcount(count => count + 1)}>Increase the count</button>
        <p>Current count is {count}</p>
        <button onClick={() => Setcount(count => count - 1)}>Decrease the count</button>
        </>
    )
}

export default Counter