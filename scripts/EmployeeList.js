import { useEmployees } from "./EmployeeProvider.js";
import { useComputers } from "./ComputerProvider.js";
import { Employee } from "./Employee.js"
import { useDepartments } from "./DepartmentProvider.js";
import { useLocations } from "./LocationProvider.js";


const contentTarget = document.querySelector(".employeesContainer")

const render = (employeesToRender) => {
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()



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

                const foundLocation = locations.find(
                    (location) => {
                        return location.id === employeeObject.locationId
                    }
                )


            return Employee(employeeObject,foundComputer,foundDepartment,foundLocation)


        }
        ).join("")
    }

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}




