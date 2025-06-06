"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import Hamburger from "hamburger-react";
import "../styles/Hamburger.css";

export default function HamburgerComponent() {
  const [Open, setOpen] = useState(false);
  return (
    <div>
      <Hamburger size={50} toggled={Open} toggle={setOpen} />
      {Open && (
        <div className="hamburger">
          <ul>
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
      )}
    </div>
  );
}
