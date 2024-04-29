// let w = document.querySelector(".w")
// let a = document.querySelector(".a")
// let s = document.querySelector(".s")
// let d = document.querySelector(".d")
// let j = document.querySelector(".j")
// let k = document.querySelector(".k")
// let l = document.querySelector(".l")

// document.addEventListener("click", () => {
//     var audio1 = new Audio("./sounds/crash.mp3")
//     audio1.play();

//     document.body.classList.toggle("dark")
// })

// document.addEventListener("keydown", (e) => {
//     if(e.key == 'w'){
//         var audio1 = new Audio("./sounds/crash.mp3")
//         audio1.play();
//     }

//     document.body.classList.toggle("dark")

 
// });

// document.addEventListener("click", () => {
//     var audio2 = new Audio("./sounds/kick-bass.mp3")
//     audio2.play();


// })

// document.addEventListener("keydown", (e) => {
//     if(e.key == 'a'){
//         var audio2 = new Audio("./sounds/kick-bass.mp3")
//         audio2.play();
//     }


 
// });

// document.addEventListener("click", () => {
//     var audio3 = new Audio("./sounds/snare.mp3")
//     audio3.play();
// })

// document.addEventListener("keydown", (e) => {
//     if(e.key == 's'){
//         var audio3 = new Audio("./sounds/snare.mp3")
//         audio3.play();
//     }
 
// });

// document.addEventListener("click", () => {
//     var audio4 = new Audio("./sounds/tom-1.mp3")
//     audio4.play();
// })

// document.addEventListener("keydown", (e) => {
//     if(e.key == 'd'){
//         var audio4 = new Audio("./sounds/tom-1.mp3")
//         audio4.play();
//     }
 
// });

// document.addEventListener("click", () => {
//     var audio5 = new Audio("./sounds/tom-2.mp3")
//     audio5.play();
// })

// document.addEventListener("keydown", (e) => {
//     if(e.key == 'j'){
//         var audio5 = new Audio("./sounds/tom-2.mp3")
//         audio5.play();
//     }
 
// });

// document.addEventListener("click", () => {
//     var audio6 = new Audio("./sounds/tom-3.mp3")
//     audio6.play();
// })

// document.addEventListener("keydown", (e) => {
//     if(e.key == 'k'){
//         var audio6 = new Audio("./sounds/tom-3.mp3")
//         audio6.play();
//     }
 
// });

// document.addEventListener("click", () => {
//     var audio7 = new Audio("./sounds/tom-4.mp3")
//     audio7.play();
// })


let counter  = document.querySelector('.counter');
plus = document.querySelector('.decrement');
minus = document.querySelector('.increment');
sanoq = 0

plus.addEventListener("click", () =>{
    sanoq += 1
    counter.innerHTML = sanoq
})

minus.addEventListener("click", () =>{
    sanoq -= 1
    counter.innerHTML = sanoq
})
