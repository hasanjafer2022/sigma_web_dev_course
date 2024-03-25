console.log('This is promises');  // promise of code executed ya to resolve hoogii ya reject hoogiii. resolve ar reject function haiii.

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5){
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() =>{
            console.log("Yes I am done")
            resolve("Harry")
       }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5){
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() =>{
            console.log("Yes I am done2")
            resolve("Harry2")
       }, 1000);
    }
})

// prom1.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     // console.log(err)
//     alert(err)
// })

// let p3 = Promise.all([prom1, prom2]) //array ki value bhi aaegii agar doono rsolve hue too 
// p3.then((a) =>{
//     console.log(a)
// }).catch((err)=>{
//     // alert(err)
//     console.log(err)
// })


// let p3 = Promise.allSettled([prom1, prom2]) //isme chahee resolve hoo ya rejct hooo status deekha deegaa 
// p3.then((a) =>{
//     console.log(a)
// }).catch((err)=>{
//     // alert(err)
//     console.log(err)
// })
let p3 = Promise.race([prom1, prom2]) //isme race legii ki kon phle execute hoogaa
p3.then((a) =>{
    console.log(a)
}).catch((err)=>{
    // alert(err)
    console.log(err)
})

