let main = document.querySelector(".main");
let unsplashURL = "https://source.unsplash.com/random/";
let rows = 3;

for (let i = 0; i < rows * 3; i++) {
  let img = document.createElement("img");
  img.src = `${unsplashURL}${getRandomSize()}`;
  main.appendChild(img);
}

console.log(getRandomSize());

function getRandomSize() {
  return `${getRandomNumber()}x${getRandomNumber()}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}
