import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact, Home, Navbar, Projects, Blogs, About } from "./components";
import useLocalStorage from "./components/useLocalStorage";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  return (
    <Router>
      <div className="App">
        <div className={darkMode ? "gradient__bg_dark" : "gradient__bg_light"}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          <Routes>
            <Route path="/" exact element={<Home darkMode={darkMode} />} />
            <Route path="/projects" exact element={<Projects />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/blogs" exact element={<Blogs />} />
            <Route
              path="/contact"
              exact
              element={<Contact darkMode={darkMode} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
