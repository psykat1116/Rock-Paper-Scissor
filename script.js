let c_score = document.getElementById("c_score");
let u_score = document.getElementById("u_score");
let c_choose = document.getElementById("c_choose");
let u_choose = document.getElementById("u_choose");
let result = document.getElementById("result");

const WeaponArr = ["Rock", "Paper", "Scissor"];
let user = 0,
  computer = 0;

function check(input) {
  const ranNum = Math.floor(Math.random() * 3);
  let weapon = WeaponArr[ranNum];
  c_choose.innerHTML = weapon;
  u_choose.innerHTML = input;
  if (weapon === input) {
    result.innerHTML = "Draw";
  } else if (weapon === "Rock" && input === "Paper") {
    result.innerHTML = "You Win";
    user++;
  } else if (weapon === "Paper" && input === "Rock") {
    result.innerHTML = "You Lose";
    computer++;
  } else if (weapon === "Rock" && input === "Scissor") {
    result.innerHTML = "You Lose";
    computer++;
  } else if (weapon === "Scissor" && input === "Rock") {
    result.innerHTML = "You Win";
    user++;
  } else if (weapon === "Scissor" && input === "Paper") {
    result.innerHTML = "You Lose";
    computer++;
  } else if (weapon === "Paper" && input === "Scissor") {
    result.innerHTML = "You Win";
    user++;
  }

  c_score.innerHTML = computer;
  u_score.innerHTML = user;
}
