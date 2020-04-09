import { useEmployees } from "./employeeProvider.js";
import { useComputers } from "./ComputerProvider.js";
import {Employee } from "./employee.js"
import { useDepartments } from "./DepartmentProvider.js";


const contentTarget = document.querySelector(".employeesContainer")

const render = (employeesToRender) => {
    const computers = useComputers()
    const departments = useDepartments()


    
        contentTarget.innerHTML = employeesToRender.map(
            (employeeObject) => {

                const foundComputer = computers.find(
                    (computer) => {
                        return computer.id === employeeObject.computerId
                    }
                )

                const foundDepartment = departments.find(
                    (department) => {
                        return department.id === employeeObject.departmentId
                }
            )


            return Employee(employeeObject,foundComputer,foundDepartment)


        }).join("")
    }

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}




