import React, { useState } from "react";
import hotel from "../assets/hotel.jpg";
import hotel2 from "../assets/hotel2.webp";
import "../styles/Toggle2.css";

const ImageToggle2: React.FC = () => {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleClick = () => {
    setIsFirstImage(!isFirstImage);
  };

  return (
    <img
      className="image"
      src={isFirstImage ? hotel : hotel2}
      alt="Toggle"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default ImageToggle2;
