/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />


export const cpp = new Subjects.Cpp();
export const react = new Subjects.React();
export const java = new Subjects.Java();

export const cTeacher: Subjects.Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10
};

// ==========================================
// Opérations pour le sujet Cpp
// ==========================================
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// ==========================================
// Opérations pour le sujet React
// ==========================================
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

// ==========================================
// Opérations pour le sujet Java
// ==========================================
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
