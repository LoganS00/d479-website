import { Parallax } from "react-parallax";
import IslandOne from "../assets/beach.jpg";
import "../styles/IslandOne.css";

const ImageOne = () => {
  return (
    <Parallax
      bgImage={IslandOne}
      strength={300}
      bgImageAlt="Beach"
      className="para1"
    >
      <div className="parallax-inner">
        <h1>Greetings From Taniti!</h1>
      </div>
    </Parallax>
  );
};

export default ImageOne;
