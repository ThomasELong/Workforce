import { useCustomers } from "../Customers/CustomerProvider.js"
import { Customer } from "./Customer.js"
import { useEmployeeCustomers } from "../Employees/EmployeeCustomerProvider.js"
import { useEmployees } from "../Employees/employeeProvider.js"



const contentTarget = document.querySelector(".customersContainer")

const render = (customersToRender) => {
    const employees = useEmployees()
    const employeeCustomers = useEmployeeCustomers()



        contentTarget.innerHTML = customersToRender.map(
            (customerObject) => {

                
                const filteredRelationships = employeeCustomers.filter(
                    (employeeCustomerRelationship) => {
                        return customerObject.id === employeeCustomerRelationship.customerId
                    }
                )

                const theMatchingEmployeeObjects = filteredRelationships.map(
                    (relationship) => {
                        const employee = employees.find(employee => employee.id === relationship.employeeId)
                        return employee
                    }
                )

            return Customer(customerObject, theMatchingEmployeeObjects)

        }
        ).join("")
    }

export const CustomerList = () => {
    const customers = useCustomers()

    render(customers)
}