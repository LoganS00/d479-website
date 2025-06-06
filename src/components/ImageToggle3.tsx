import React, { useState } from "react";
import airbnb from "../assets/airbnb.avif";
import airbnb2 from "../assets/airbnb2.avif";
import "../styles/Toggle3.css";

const ImageToggle3: React.FC = () => {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleClick = () => {
    setIsFirstImage(!isFirstImage);
  };

  return (
    <img
      className="image"
      src={isFirstImage ? airbnb : airbnb2}
      alt="Toggle"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default ImageToggle3;
