// Variables
// 1)Let

let name = "John";
name='Kate'
console.log('Name is:' + name)

let age=20;
// age='Thirty'
console.log('Age is:' + age)

let ageMoreThan18 = true
console.log('Age is more that 18:' + ageMoreThan18)



// 2)const 

const name2 = "Mohit"
const age2 = 24
const ageMoreThan18_2 = true

console.log('Name is:' + name2)
console.log('Age is:' + age2)
console.log('Age is more that 18:' + ageMoreThan18_2)



// conditional Operators

let ageMoreThan18_3 
if (age > 18){
    ageMoreThan18_3=true
}
else if (age = 18){
    ageMoreThan18_3 = false
}
else{
    ageMoreThan18_3=false
}
console.log('Age is more that 18 : ' + ageMoreThan18_3)



let ageMoreThan18_4 = age > 18 ? true : false
console.log('Age is more than 18 : '+ ageMoreThan18_4)



 // LOOPS

 let i = 0
 while(i < 5){
    console.log('i is now : '+ i)
    i++
 }

 for(i=0; i<=5; i++){
    console.log('i is now :' + i)
 }


 //FUNCTIONS

 function product (a,b){
    return a*b
 }
 let result = product(5,4)
 console.log("The Product of a and b is : " + result)


//  variables declared inside the functions are local to the function
 
//  function product (c,d){
//     let res = c * d
//  }
//  product(6,8)
// console.log(res)