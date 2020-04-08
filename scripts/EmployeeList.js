import { useEmployees } from "./employeeProvider.js";
import { useComputers } from "./ComputerProvider.js";
import {Employee } from "./employee.js"

const contentTarget = document.querySelector(".employeesContainer")

const render = (employeesToRender) => {
    const computers = useComputers()

        contentTarget.innerHTML = employeesToRender.map(
            (employeeObject) => {
                const foundComputer = computers.find((computer) => {
                        return computer.id === employeeObject.computerId
                    }
                )

            return Employee(employeeObject, foundComputer)


        }).join("")
    }

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}




