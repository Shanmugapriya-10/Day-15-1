// Create form elements 
const form = document.createElement('form');
form.id = 'formData';
const formFields = [
    { label: 'First Name:', type: 'text', name: 'firstName', required: true },
    { label: 'Last Name:', type: 'text', name: 'lastName', required: true },
    { label: 'Address:', type: 'text', name: 'address', required: true },
    { label: 'Pincode:', type: 'text', name: 'pincode', required: true },
    { label: 'Gender:', type: 'select', name: 'gender', options: ['Male', 'Female', 'Other'], required: true },
    { label: 'Choice of Food (select at least 2):', type: 'checkbox', name: 'food', options: ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi'], required: true },
    { label: 'State:', type: 'text', name: 'state', required: true }, { label: 'Country:', type: 'text', name: 'country', required: true }
];
formFields.forEach(field => {
    const label = document.createElement('label');
    label.textContent = field.label;
    form.appendChild(label); let input;
    if (field.type === 'select') {
        input = document.createElement('select');
        field.options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.toLowerCase();
            optionElement.textContent = option;
            input.appendChild(optionElement);
        });
    } else if (field.type === 'checkbox') {
        field.options.forEach(option => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox'; checkbox.name = field.name;
            checkbox.value = option.toLowerCase();
            const optionLabel = document.createElement('label');
            optionLabel.textContent = option;
            form.appendChild(checkbox);
            form.appendChild(optionLabel);
        });
        input = null;
    } else {
        input = document.createElement('input');
        input.type = field.type;
        input.name = field.name;
    } if (input) {
        form.appendChild(input);
    }
});
// Create submit button 
const submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = 'Submit';
form.appendChild(submitButton);
// Create table 
const table = document.createElement('table');
table.id = 'dataTable';
const tableHeader = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = ['First Name', 'Last Name', 'Address', 'Pincode', 'Gender', 'Food', 'State', 'Country'];
headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
});

tableHeader.appendChild(headerRow);
table.appendChild(tableHeader);
// Create table body 
const tableBody =
    document.createElement('tbody');
table.appendChild(tableBody);
// Append form and table to the document body 
document.body.appendChild(form);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(document.createElement('hr'));
document.body.appendChild(table);
// Form submission handler 
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form data 
    const formData = new FormData(form);
    console.log('formData', formData);
    console.log('form', form);
    const rowData = [];
    formData.forEach((value, key) => {
        if (key === 'food') { value = Array.from(formData.getAll('food')).join(', '); }
        if (key === 'gender') { value = Array.from(formData.get('gender')); } rowData.push(value);
    });
    console.log('rowData', rowData);
    // Add data to table 
    const newRow = document.createElement('tr');
    rowData.forEach(data => {
        const cell = document.createElement('td');
        cell.textContent = data; newRow.appendChild(cell);
    });
    tableBody.appendChild(newRow);
    // Clear form fields 
    form.reset();
});