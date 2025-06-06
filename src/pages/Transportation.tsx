import { Parallax } from "react-parallax";
import "../styles/Transportation.css";
import transtop from "../assets/transTop.webp";
import tram from "../assets/tram.jpg";

function Transportation() {
  return (
    <div className="Trans">
      <Parallax
        bgImage={transtop}
        strength={500}
        bgImageAlt="Many huts on a beach and on a dock"
        className="para1"
      >
        <div className="title">
          <h1>Tramsportation</h1>
        </div>
      </Parallax>
      <div className="main">
        <div className="section">
          <img src={tram} alt="air tram" />
          <p>sample</p>
        </div>
        <div className="section">
          <img src={tram} alt="air tram" />
          <p>sample</p>
        </div>
        <div className="section">
          <img src={tram} alt="air tram" />
          <p>sample</p>
        </div>
      </div>
    </div>
  );
}

export default Transportation;
