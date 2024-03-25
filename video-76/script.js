console.log("Async/Await & Fetch API in JavaScript with Examples")

// function getData(){
// return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(455)
//     },5500);
// })
// }


// async function getData(){ //background m chale script chalegii bg me which means simulate getting data from a server
// return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(455)
//     },5500);
// })
// }

// ab usko actual funcrion pr convert krunga ar fetch API uthaunga json site se
async function getData(){ //background m chale script chalegii bg me which means simulate getting data from a server
    let x =  await fetch('https://jsonplaceholder.typicode.com/todos/1') // ye promise return kregea
    // .then(response => response.json())
    // .then(json => console.log(json)) // ye 2 promises hoti haii isko hm code m deekhte haii

    let data = await x.text() // ye pass krne ka promise hai isme data text(string) ki form m aaega 


    // let data = await x.json() // ye pass krne ka promise hai isme data json ki form m aaega 
    console.log(data)

}
async function main(){  //sb cheez ko ek hi function m wrap kr dia 


console.log("Loading Modules")

console.log("Do something else")

console.log("Load Data")

let data = await getData() //await kregaa

// data.then((v)=>{

//     console.log(data)
    
    
//     console.log("Process Data")
    
    
//     console.log("Task 2")
    
// }) //isme call back () bnana yaaiii tb data show hoooga

// ise acha clean code likhne ke liye Ayync ka use lrte hai data ko load krne m

    console.log(data)
    
    console.log("Process Data")
    
    console.log("Task 2")
    

}

main()



// async function getData() {
//     // Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() 
    return data
}

async function main(){
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data")

    let data = await getData()

    console.log(data)

    console.log("process data")

    console.log("task 2")

}

main()


//ye main code haii

// data.then((v) => { 
//     console.log(data)

//     console.log("process data")

//     console.log("task 2")

// })