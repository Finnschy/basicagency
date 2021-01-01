let hl1 = document.getElementById("hl1")
let hl2 = document.getElementById("hl2")
let hl3 = document.getElementById("hl3")
let hl4 = document.getElementById("hl4")
let hl5 = document.getElementById("hl5")
let hl6 = document.getElementById("hl6")

let img1 = document.getElementById("img1")
console.log(hl1);

hl1.addEventListener("mouseover", () => img1.classList.remove("imgHoverDisplay"))
hl1.addEventListener("mouseleave", () => img1.classList.add("imgHoverDisplay"))
hl2.addEventListener("mouseover", () => console.log("test"))
hl3.addEventListener("mouseover", () => console.log("test"))
hl4.addEventListener("mouseover", () => console.log("test"))
hl5.addEventListener("mouseover", () => console.log("test"))
hl6.addEventListener("mouseover", () => console.log("test"))