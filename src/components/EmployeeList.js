import React from "react";
import Employee from "./Employee";

export default function EmployeeList() {
        const employees = [
            {
                name: "gaylord",
                gender: "male",
                country: "Colombia",
                age: "39",
                id:1
            },
            {
                name: "daisy",
                gender: "female",
                country: "UK",
                age: "19",
                id:2
            },
            {
                name: "mike",
                gender: "male",
                country: "USA",
                age: "27",
                id:3
            },
            {
                name: "sahil",
                gender: "male",
                country: "India",
                age: "24",
                id:4
            },
        ]
    return (
        <div>
            {
                employees.map((employee)=>
                    <div key={employee.id}>
                        <Employee
                            name={employee.name}
                            gender={employee.gender}
                            country={employee.country}
                            age={employee.age}
                        />
                    </div>
                )
            }
        </div>
    )
}