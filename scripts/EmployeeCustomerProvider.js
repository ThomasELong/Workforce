let employeeCustomers = []

export const useEmployeeCustomers = () => {
    return employeeCustomers.slice()
}

export const getEmployeeCustomers = () => {
    return fetch("http://localhost:3000/employeeCustomers")
        .then(response => response.json())
        .then(parsedEmployeeCustomers => {
            employeeCustomers=parsedEmployeeCustomers
        }
    )
}