import HamburgerComponent from "./Hamburger";
import "../styles/Heading.css";
import Tiki from "../assets/tiki-removebg-preview.png";
import { Link } from "react-router-dom";

function Heading() {
  return (
    <div className="heading">
      <div className="leftside">
        <img className="tiki" src={Tiki} alt="Tiki face" />
        <h1>Taniti</h1>
        <h2 className="welcome">
          {" "}
          1-800-8000 or <Link to="/Contact">contact us</Link>
        </h2>
      </div>
      <div className="rightside">
        <HamburgerComponent />
      </div>
    </div>
  );
}

export default Heading;
