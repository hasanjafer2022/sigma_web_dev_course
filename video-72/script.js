console.log("Script js initializing")

let boxes = document.querySelector(".container").children
// let boxes = document.getElementsByClassName("box") //we can write in both ways 
// console.log(boxes)


//creating a function
function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`

}
//creatig an array from html elements
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.Color = getRandomColor()
})