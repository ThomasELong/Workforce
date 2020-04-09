export const Employee = (employeeObject,computerObject,departmentObject,locationObject) => {
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

        </div>
    `
}