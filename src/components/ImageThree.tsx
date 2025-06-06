import { Parallax } from "react-parallax";
import IslandThree from "../assets/island 3.jpg";
import "../styles/IslandOne.css";

const ImageOne = () => (
  <Parallax
    className="para1"
    bgImage={IslandThree}
    bgImageAlt="photo of island"
    strength={300}
  ></Parallax>
);
export default ImageOne;
