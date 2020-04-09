import { getEmployees } from "./EmployeeProvider.js";
import { EmployeeList } from "./EmployeeList.js";
import { getComputers } from "./ComputerProvider.js";
import { getDepartments } from "./DepartmentProvider.js";


getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(EmployeeList)
