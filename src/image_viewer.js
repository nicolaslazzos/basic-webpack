import big from "../assets/big.jpg";
import small from "../assets/small.jpg";
import "../styles/image_viewer.css";

export default () => {
  const image = document.createElement("img");
  image.src = small;

  document.body.appendChild(image);

  const big_image = document.createElement("img");
  big_image.src = big;

  document.body.appendChild(big_image);
};
