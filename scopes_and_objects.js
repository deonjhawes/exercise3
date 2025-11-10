// TODO: Create a global variable called globalCount
let globalCount = 12;

console.log("Global Count orignal value:", globalCount);
console.log("_".repeat(80));

// TODO: Create a function that demonstrates local scope
// TODO: Create a function that tries to modify both variables

function showLocalScope() {
    let localCount = 5; // local variable
    console.log("Local Count orignal value:", localCount);
    change()
    function change()
    {
        globalCount = 25; 
        localCount = 35;
    }
    console.log("Local Count:", localCount);
    console.log("Global Count (inside function):", globalCount);
    console.log("_".repeat(80));
}

showLocalScope()

// TODO: Create a Student constructor function
function student(name,surname,age,grade) {

    this.name = name;
    this.surname = surname ;
    this.age = age;
    this.grade = grade ;
}
// TODO: Create several student instances
let student1 = new student ("Deon", 14, "8th");
let student2 = new student("michael", 16, "10th");
let student3 = new student("john", 17, "11th");

const students = [student1, student2, student3];


console.log(student1, student2, student3);
console.log("_".repeat(80));
// TODO: Create an object literal with nested properties
let school = {
    name: "Rocklands High",
    location: "Rocklands",
    principal: {
        name: "Mr. Smith",
        age: 56
    },
    address: {
        street: "12 Main St",
        city: "Caoetown",
        zip: "7785"
    }
    
};
console.log(school);
console.log(school.principal);
console.log(school.address);

