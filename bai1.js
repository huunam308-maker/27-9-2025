const students = [
    { name: "An", age: 20 },
    { name: "Bình", age: 21 },
    { name: "Châu", age: 20 },
    { name: "Dũng", age: 22 }
];

let groupedByAge = students.reduce((groups, student) => {
    if (!groups[student.age]) {
        groups[student.age] = [];
    }
    groups[student.age].push(student.name);
    return groups;
}, {});

console.log("Nhóm sinh viên theo tuổi:");
console.log(groupedByAge);