import "./Main.scss";
import { Routes, Route } from "react-router-dom";
import Home from "../../MainComponent/Home/Home.jsx";
import Projects from "../../MainComponent/Projects/Projects.jsx";
import Contact from "../../MainComponent/Contact/Contact.jsx";
import { Navigate } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default Main;
