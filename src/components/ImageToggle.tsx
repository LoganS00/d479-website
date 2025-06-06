import React, { useState } from "react";
import hut1 from "../assets/hut.jpeg";
import hut2 from "../assets/hut2.jpeg";
import "../styles/Toggle.css";

const ImageToggle: React.FC = () => {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleClick = () => {
    setIsFirstImage(!isFirstImage);
  };

  return (
    <img
      className="image"
      src={isFirstImage ? hut1 : hut2}
      alt="Toggle"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default ImageToggle;
