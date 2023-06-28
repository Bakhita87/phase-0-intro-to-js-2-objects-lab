// Write your solution in this file!
let employee = {
    name :"Brenda",
    streetAddress : "James Dobson"
}


  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = 'Sam'
    return { ... employee,  [key]: value};
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = 'Sam'
  
    employee.streetAddress ='12 Broadway'
    employee[key] = value;
    return employee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  
  function deleteFromEmployeeByKey(employee, key) {
    
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  
  