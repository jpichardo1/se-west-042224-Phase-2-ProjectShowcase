import { useState } from "react";

const Header = () => {

  const [isDarkMode, setIsDarkMode] = useState(true)
  // console.log("🚀 ~ Header ~ isDarkMode:", isDarkMode)

  function handleToggleDarkMode(){
    // console.log("click handled!")
    setIsDarkMode(currIsDarkMode => !currIsDarkMode)
  }

  const buttonText = isDarkMode ? "Light Mode" : "Dark Mode"
  // console.log("🚀 ~ Header ~ buttonText:", buttonText)

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <nav>
        <button onClick={handleToggleDarkMode} >{buttonText}</button>
      </nav>
    </header>
  );
}

export default Header;
