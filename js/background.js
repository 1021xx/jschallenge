// img bg
const images = [
  "photo (1).png",
  "photo (2).png",
  "photo (3).png",
  "photo (4).png",
  "photo (5).png",
  "photo (6).png",
  "photo (7).png",
  "photo (8).png",
];

const chosenImg = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('../bg/${chosenImg}')`;


// radial-gradient bg
/* const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
  "#94bbe9"
];

function handleClick() {
  const a = colors[Math.floor(Math.random() * colors.length)];
  const b = colors[Math.floor(Math.random() * colors.length)];
  if (a === b) {
    return handleClick();
  }
  document.body.style.background = `radial-gradient(circle, ${a}, ${b})`;
}

document.body.style.background =  handleClick(); */


