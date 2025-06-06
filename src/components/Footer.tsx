import "../styles/Footer.css";
import Xlogo from "../assets/xlogo.webp";
import Insta from "../assets/instgramlogo.png";
import Face from "../assets/facebooklogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="foot">
      <div className="botnav">
        <ul className="botul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/transportation">Transportation</Link>
          </li>
          <li>
            <Link to="/Lodging">Lodging</Link>
          </li>
          <li>
            <Link to="/Entertainment">Entertainment</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/FAQs">FAQs</Link>
          </li>
        </ul>
      </div>
      <div className="icons">
        <ul className="three-logo">
          <li>
            <img className="tiki" alt="X Logo" src={Xlogo} />
          </li>
          <li>
            <img className="tiki" alt="Instagram Logo" src={Insta} />
          </li>
          <li>
            <img className="tiki" alt="Facebook Logo" src={Face} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
