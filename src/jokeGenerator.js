import axios from "axios";
// const axios = require("axios").default;

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
      "User-Agent":
        "Axios-Convolva-Joke-Generator (https://github.com/Convolva) convolva@gmail.com",
    },
  };

  axios.get("https://icanhazdadjoke.com/", config).then((response) => {
    document.getElementById("joke").innerHTML = response.data.joke;
  });
}

export default generateJoke;
