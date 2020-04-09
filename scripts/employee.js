export const Employee = (employeeObject,computerObject,departmentObject) => {
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

        </div>
    `
}