import { useState } from "react";
import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import ProjectsContainer from "./components/ProjectsContainer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects/*" element={<ProjectsContainer />}/>
      </Routes>
    </div>
  );
};

export default App;
