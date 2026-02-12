import { useState } from "react"

function Employee() {
    const[EmployeeCount,SetEmployeeCount] = useState(0)
    return(
        <>
        <button onClick={() => SetEmployeeCount(EmployeeCount => EmployeeCount+1)}> Click me</button>
        <p>No of employees = {EmployeeCount}</p>
        </>
    )
}

export default Employee