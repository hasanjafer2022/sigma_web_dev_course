// asunchronous () where the browser runs who will got first, second etc..positions

console.log("Hasan is a hacker")

console.log("Rohan is a hecker")


setTimeout(() => {
    console.log("I am inside settimeout")
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 0);

console.log("The End")

// const fn = () => {
//   console.log("Nothing")
// }

// const callback = (arg, fn) => {
//     console.log(arg)
//     fn()
// }

// const loadScript = (src, callback) => {
//     let sc = document.createElement("script");
//     sc.src = src;
//     sc.onload = callback("Harry", fn);
//     document.head.append(sc)
// }


// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )
const callback =(arg)=>{
    console.log(arg)
}
const loadScript =(src, callback) => {
  let sc = document.createElement("script");
    sc.src = src;
    sc.onload  = ()=> callback("Hasan");
    document.head.append(sc); // Append the script tag to the head of the document
};
  

  loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )