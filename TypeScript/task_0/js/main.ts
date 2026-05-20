// 1. Définition de l'interface Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// 2. Création étudiants
const student1: Student = {
    firstName: "Aïny",
    lastName: "Ourzik",
    age: 35,
    location: "Toulouse"
};

const student2: Student = {
    firstName: "Benjamin",
    lastName: "Bommier",
    age: 29,
    location: "Toulouse"
};

// 3. Stockage dans tableau 
const studentsList: Student[] = [student1, student2];

// 4. Génération tableau
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// Création ligne pour étudiants 
studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
