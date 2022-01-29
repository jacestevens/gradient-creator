console.log("we in this bitch");

let background = document.querySelector("#bg");
let color1 = document.querySelector("#first-color");
let color2 = document.querySelector("#second-color");
console.log(background.style.background);
console.log(color1);
console.log(color2);

let setGradient = () => {
    background.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

