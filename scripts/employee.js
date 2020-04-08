export const Employee = (employeeObject) => {
    return `
        <section class= "employee">
            
                <h2>${employeeObject.firstName} ${employeeObject.lastName}</h2>
                <div>${employeeObject.age}</div>
                <div>${computerObject.year} ${computerObject.model}</div>
            
        </section>
    `
}