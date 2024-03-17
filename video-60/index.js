console.log("This is strings tutorial")
let a = "Hasan";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

// console.log(a[5]);

console.log(a.length)


let real_name = "Hasan"
let friend = "Rohan"
console.log("His name is   " + real_name +  " and his friend name is " + friend)

// hm iskoo dusreii tarah bhii likh skte haiii

console.log(`His name is ${real_name} and his friends name is ${friend}`)  // template literals kha jata haiii 

/// escape scquence characters

// \n -- New line 
// \t -- Tab
// \r -- Crriage Return

let b = "Jafer"
console.log(b.toLowerCase())
console.log(b.toUpperCase())

// slicing

console.log(b.slice(1,5))
console.log(b.slice())

console.log(b.replace("Ja", "37" ))

console.log(b.concat(a))
console.log(b.concat(a, "Aishwariya\t", "Mohd\t", "Aftab\t"))

// strings are immutable

console.log(b)