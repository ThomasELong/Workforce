export const Customer = (customerObject, employeeArray) => {
    return `
        <div class= "customer">
            
                <header class="customer__name">
                    <h1> ${customerObject.name}</h1>
                </header>
                <div class="employee__customers"> 
                    <ul>
                        ${employeeArray.map(employees => `<li>${employees.firstName} ${employees.lastName}</li>`).join("")}
                    </ul>
                </div>

        </div>
    `
}