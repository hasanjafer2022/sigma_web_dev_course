// let button =btn.addEventListener("contextmenu", ()=>{
//     alert("Don't hack us by Right Click Please")
// }) document.getElementById("btn")
// // List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


// button.addEventListener("dblclick", ()=>{
//     document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
// })

// button.addEventListener("contextmenu", ()=>{
//     alert("Dont hack us by Right click Please")
// })

// document.addEventListener("keydown", (e)=>{
//     console.log(e, e.key, e.keyCode)
// })


let btn = document.getElementById("btn")

btn.addEventListener("dblclick", ()=>{
    // alert("I was clicked")
    document.querySelector(".box").innerHTML = "<b> Yayy you were clicked </b> Enjoy your click!"
})


document.addEventListener("keydown", (e)=>{
        console.log(e, e.key, e.keyCode)
})