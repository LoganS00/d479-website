import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Heading from "./components/Heading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //imported for page switching

function App() {
  return (
    <div className="App">
      <Router>
        <Heading />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
