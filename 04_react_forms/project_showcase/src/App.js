import { useState } from "react";

import Header from "./components/Header";
import ProjectsContainer from "./components/ProjectsContainer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <ProjectsContainer />
    </div>
  );
};

export default App;
