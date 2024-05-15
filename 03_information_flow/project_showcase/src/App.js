import { useState } from 'react'
import Header from "./components/Header";
import ProjectContainer from './components/ProjectContainer';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(true); // lifted up from Header

  const toggleDarkMode = () => { // lifted up from Header
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  return (
    <div className={isDarkMode? "App" : "App light"}>
      <Header
        isDarkMode={isDarkMode} // passed back down as prop to Header
        onToggleDarkMode={toggleDarkMode} // passed back down as callback in props
      />
      <ProjectContainer />
    </div>
  );
};

export default App;
