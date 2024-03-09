console.log("Welcome to Javadcript function");


// console.log("Hey hasan you are nice");
// console.log("Hey hasan you are good");
// console.log("Hey hasan you tshirt nice");
// console.log("Hey hasan you have nice hair style");

function nice(name) {
    console.log("Hey " + name + " you are nice");
    console.log("Hey " + name + " you are good");
    console.log("Hey " + name + " you tshirt nice");
    console.log("Hey " + name + " you have nice hair style");
}

nice("Jafer")

function sum(a, b, c = 3) { // c is the default value 
    // console.log (a + b)
    return a + b + c
}

// result1 = sum(3)
 result1 = sum(3 , 5 )
result2 = sum(83, 15)
result3 = sum(43, 45)

console.log("The sum of these numbers is :  ", result1);
console.log("The sum of these numbers is :  ", result2);
console.log("The sum of these numbers is :  ", result3);


// arrow function  stored in variable 

const func1 = (x) =>{
    console.log("I am an Aroow Function", x)
}

func1(45);
func1(46);
func1(85);