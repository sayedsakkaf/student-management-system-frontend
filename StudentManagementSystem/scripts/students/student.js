function Student(firstName, surname, id = null) {
    this.firstName = firstName;
    this.surname = surname;
    this.id = id;
}

const studentHeaders =  ['id', 'firstName', 'surname'];

function renderStudentTable(students, containerElement) {
    const tableManager = new TableManager();
    const table = tableManager.createTable(studentHeaders, students);
    containerElement.replaceChildren(table);
}