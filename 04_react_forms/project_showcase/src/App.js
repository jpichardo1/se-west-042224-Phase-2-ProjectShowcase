import { useState } from "react";

import Header from "./components/Header";
import ProjectContainer from "./components/ProjectContainer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <ProjectContainer />
    </div>
  );
};

export default App;
