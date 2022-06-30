import "./styles/main.scss";
import generateJoke from "./jokeGenerator";

import ultralaugh from "./assets/ultralaugh.jpg";

const ultraLaugh = document.getElementById("ultra-laugh");
ultraLaugh.src = ultralaugh;

generateJoke();

const jokeBtn = document.getElementById("joke-button");
jokeBtn.addEventListener("click", () => {
  //   jokeBtn.classList.toggle("button-click");
  generateJoke();
});
