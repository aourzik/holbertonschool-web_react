// ==========================================
// TASK 1 : Teacher Interface & Instance
// ==========================================
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

// ==========================================
// TASK 2 : Directors Interface (Inheritance)
// ==========================================
interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

// ==========================================
// TASK 3 : Function Interface & Implementation
// ==========================================
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// ==========================================
// TASK 4 : StudentClass & its Interfaces
// ==========================================
interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// ==========================================
// EXECUTIONS / CONSOLE LOGS
// ==========================================
console.log(teacher3);
console.log(director1);
console.log(printTeacher('John', 'Doe'));

// Test rapide pour valider le fonctionnement de la Task 4
const studentInstance = new StudentClass("Aïny", "Ourzik");
console.log(studentInstance.displayName());
console.log(studentInstance.workOnHomework());

// Exports
export {
    Teacher,
    Directors,
    printTeacherFunction,
    printTeacher,
    director1,
    teacher3,
    StudentConstructor,
    StudentClassInterface,
    StudentClass
};
