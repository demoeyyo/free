let myname="Delmas"
console.log(`hello, ${myname}`); // hello, Delmas!
let isgreater=4>1;
console.log(isgreater);//true(the comparison result is "yes")\

let user={  // an object
name: "Delmas", 
age: 27, 
date: "07/06/2021",
phonenumber: 08031948110
}
console.log(user.name+"\t"+user.age+"\n"+user.date+"\n"+user.phonenumber)

let year = 2021
if (year ==2020) {
    console.log("ÿou are correct");
} else {
    console.log("that is wrong")
}

let age = 9;
if (age<10 || age>18) {
    console.log('No Acess Allowed');
}

let oranges = 5;
while(oranges!== 0){
    console.log(oranges)
    oranges--;
}
for (let i=5; i>3; i--){
    console.log(i)
}