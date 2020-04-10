export const Employee = (employeeObject,computerObject,departmentObject,locationObject,customerArray) => {
    return `
        <div class= "employee">
            
                <header class="employee__name">
                    <h1> ${employeeObject.firstName} ${employeeObject.lastName}</h1>
                </header>
                <section class="employee__computer">
                    <div>Currently using a ${computerObject.year} ${computerObject.model}</div>
                </section>
                <section class="employee__department">
                <div>Works in the ${departmentObject.name} department</div>
                </section>
                <section class="employee__location">
                <div>Works at the ${locationObject.city} branch</div>
                </section>
                <div class="employee__customers"> 
                    <ul>
                        ${customerArray.map(customers => `<li>${customers.name}</li>`).join("")}
                    </ul>
                </div>

        </div>
    `
}