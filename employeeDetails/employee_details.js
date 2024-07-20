const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      { id:4, name: 'Steeve Binu Baby', age: 22, department: 'IT', salary: 85000},
    ];

function displayEmployees(){
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((total,employee)=> total + employee.salary,0);
    alert(`Total Salaries: ${totalSalaries}`);
}

function displayHREmployees(){
    const hrEmployees = employees.filter(employee=> employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee,index) => `<p>${employee.id} : ${employee.name}`).join('');
   document.getElementById('employeesDetails').innerHTML=hrEmployeesDisplay;
}

function findEmployeeById(employeeid){
    const foundEmployee= employees.find((e) => e.id === employeeid );
    if(foundEmployee){
        document.getElementById('employeesDetails').innerHTML= `<p>${foundEmployee.id} : ${foundEmployee.name} - $${foundEmployee.salary}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = `<p>Employee not found or not registered</p>`;
    }

}