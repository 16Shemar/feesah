// For the form registration
document.getElementById('registerForm').addEventListener('submit', function (event) {
    // Basic validation
    const fields = ['name', 'surname', 'identityNo', 'gender', 'address', 'contact', 'email'];
    for (const field of fields) {
        const input = document.getElementById(field);
        if (input.value.trim() === '') {
            alert(`Please fill out the ${field} field.`);
            event.preventDefault();
            return;
        }
    }
});
// for the login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('Please fill out both username and password.');
        event.preventDefault();
    }
});
// this is the salary/wage calculator
function calculateSalary() {
    const status = document.getElementById('status').value;
    const type = document.getElementById('type').value;
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
    const rate = parseFloat(document.getElementById('rate').value);

    if (!status || !type || isNaN(hoursWorked) || isNaN(rate)) {
        alert('Please fill out all fields.');
        return;
    }

    let baseRate = rate;
    if (status === 'manager') {
        baseRate += 50; // Example bonus for managers
    }

    let totalSalary = hoursWorked * baseRate;

    if (type === 'partTime') {
        totalSalary *= 0.8; // Example reduction for part-time employees
    }

    document.getElementById('result').innerText = `Total Salary: R${totalSalary.toFixed(2)} A Day`;
}
