const startButton = document.querySelector(".start");
const boxes =  document.querySelector(".box");
const countValue = document.getElementById("count");

const colors = {
    color1: {
      current: "#068e06",
      new: "#11e711",
    },
    color2: {
      current: "#950303",
      new: "#fd2a2a",
    },
    color3: {
      current: "#919102",
      new: "#fafa18",
    },
    color4: {
      current: "#01018a",
      new: "#2062fc",
    },
};

let randomColors = [];
//let pathGeneratorBool = false;
let count=0 ,clickCount = 0;

startButton.addEventListener("click",() =>{
    console.log("checked");
    startButton.classList.add("hide");
    boxes.classList.remove("hide");
    boxes.classList.add("show");
    generateSequence();
});

const generateSequence = () => {
    randomColors.push(generateRandomValue(colors));
    count = randomColors.length;
    //pathGeneratorBool = true;
    pathDecide(count);
    console.log(randomColors);
    console.log(count);
};

const generateRandomValue = (obj) => {
  let arr = Object.keys(obj);
  return arr[Math.floor(Math.random() * arr.length)];
};

const pathDecide = async (count) => {
  count.innerText = count;
  for (let i of randomColors) {
    let currentColor = document.querySelector(`.${i}`);
    await delay(500);
    currentColor.style.backgroundColor = `${colors[i]["new"]}`;
    await delay(600);
    currentColor.style.backgroundColor = `${colors[i]["current"]}`;
    await delay(600);
  }
  //pathGeneratorBool = false;
};

async function delay(time) {
  return await new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}