// Import the image file
import catImage from "./assets/404-page-cat.png";
import "./styles/404.scss";

// Find the <img> tag by its ID
const imgElement = document.getElementById("404-error-cat");

// Set the `src` attribute to the imported image URL
imgElement.src = catImage;
