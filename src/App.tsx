import "./App.css";
import Home from "./pages/Home";
import Transportation from "./pages/Transportation";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import Lodging from "./pages/Lodging";
import Entertainment from "./pages/Entertainment";
import Intro from "./components/intro";

import Footer from "./components/Footer";
import Heading from "./components/Heading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //imported for page switching

function App() {
  return (
    <div className="App">
      <Router>
        <Heading />
        <div className="intro">
          <Intro />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Transportation" element={<Transportation />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/Lodging" element={<Lodging />} />
          <Route path="/Entertainment" element={<Entertainment />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
