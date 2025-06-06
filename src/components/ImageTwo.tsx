import { Parallax } from "react-parallax";
import IslandTwo from "../assets/island2.jpg";
import "../styles/IslandOne.css";

const ImageOne = () => (
  <Parallax
    className="para1"
    bgImage={IslandTwo}
    bgImageAlt="photo of island"
    strength={300}
  ></Parallax>
);
export default ImageOne;
