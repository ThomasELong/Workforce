import { getEmployees } from "./Employees/employeeProvider.js"
import { EmployeeList } from "./Employees/EmployeeList.js"
import { getComputers } from "./ComputerProvider.js"
import { getDepartments } from "./DepartmentProvider.js"
import { getLocations } from "./LocationProvider.js"
import { getCustomers } from "./Customers/CustomerProvider.js"
import { getEmployeeCustomers } from "./Employees/EmployeeCustomerProvider.js"
import { CustomerList } from "./Customers/CustomerList.js"



getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(EmployeeList)
    .then(CustomerList)
