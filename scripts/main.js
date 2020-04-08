import { getEmployees } from "./employeeProvider.js";
import { EmployeeList } from "./employeeList.js";
import { getComputers } from "./ComputerProvider.js";

getEmployees()
    .then(getComputers)
    .then(EmployeeList)