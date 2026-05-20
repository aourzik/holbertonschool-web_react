interface Teacher {

    readonly firstName: string;
    readonly lastName: string;

    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

// interface créée à la task 2
interface Directors extends Teacher {

    numberOfReports: number;
}

//interface créée à la task 3 pour la fonction printTeacher
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(director1);
console.log(teacher3);
console.log(printTeacher('John', 'Doe'));

export { Teacher, Directors, printTeacherFunction, printTeacher, director1, teacher3 };
