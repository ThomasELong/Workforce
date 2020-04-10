import { useEmployees } from "./employeeProvider.js";
import { useComputers } from "../ComputerProvider.js";
import { Employee } from "./employee.js"
import { useDepartments } from "../DepartmentProvider.js";
import { useLocations } from "../LocationProvider.js";
import { useEmployeeCustomers } from "./EmployeeCustomerProvider.js"
import { useCustomers } from "../Customers/CustomerProvider.js"

const contentTarget = document.querySelector(".employeesContainer")

const render = (employeesToRender) => {
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()
    const customers = useCustomers()
    const employeeCustomers = useEmployeeCustomers()



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

                const filteredRelationships = employeeCustomers.filter(
                    employeeCustomerRelationship => {
                        return employeeObject.id === employeeCustomerRelationship.employeeId
                    }
                )

                const theMatchingCustomerObjects = filteredRelationships.map(
                    relationship => {
                        const customer = customers.find(customer => customer.id === relationship.customerId)
                        return customer
                    }
                )

            return Employee(employeeObject,foundComputer,foundDepartment,foundLocation,theMatchingCustomerObjects)

        }
        ).join("")
    }

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}