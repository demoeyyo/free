// ARRAY METHODS

// var animal = "lion";
// var animals = ["sheep", "goat", "dog", "cat"];

// animals.unshift(animal);
// console.log(animals.pop());

// arr = ("i", "study", "javascript");
// arr.spice(1, 1);
// console.log (arr);

// arr.slice([start], [end])

// let arr = ["t", "e", "s", "t"];
// console.log(arr.slice(1, 3));
// console.log(arr.slice(-2));


// animals.forEach(function(animal) {
//     console.log(`${animal} can also speak?`);
// });

// let users = [
//     {id: 1, name: "john"},
//     {id: 2, name: "pete"},
//     {id: 3, name: "mary"},
// ];

// let someUsers = users.filter((item) =>item.id<3);
// console.log (someUsers[0].name);


// let users = [
//     {id: 1, name: "john", age: 18},
//     {id: 2, name: "pete", age: 20},
//     {id: 3, name: "mary", age: 14},
// ];
// let underAge = users.filter(function (users){
//     return users.age <19;
// });

// console.log(underAge);
// console.log(users);


// let arr = ["Bilbo", "Gandalf", "Nazgul"]
// let lengths = arr.map(item=>item.length);
// console.log(lengths);

// let arr2=[4, 89, 32]
// let calculate = arr2.map(item=>item*6);
// console.log(calculate)



// let calc = function (grade) {
//     return grade / 2;
// }
// let arr2=[4, 89, 32]
// let calculate = arr2.map(calc);

// console.log(calculate);


let names = 'Bilbo, Gandalf, Nazgul';
let arr = names.split(', ');
arr.forEach((names)=>{
    console.log (`A message to ${names}.`);
})


let arr2=["Bilbo", "Gandalf", "Nazgul"];
let str = arr2.john(';');
let combine=arr2.join('')

console.log (str);
console.log(combine)
