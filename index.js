const employee = {
    name: "Jim",
    streetAdress: "9198 Springfield dr",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
  
    newEmployee[key] = value;
  
    return newEmployee;
  }
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee;
}
function deleteFromEmployeeByKey(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}
  