import { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // this is a common naming convention for boolean values; booleans are often used in toggles
  // console.log("🚀 ~ Header ~ isDarkMode:", isDarkMode)

  function handleToggleDarkMode() {
    // console.log("click handled!")
    setIsDarkMode((currIsDarkMode) => !currIsDarkMode); // the bang (!) operator is often used this way in a toggle fn
  }

  const buttonText = isDarkMode ? "Light Mode" : "Dark Mode"; // we'll be seeing more ternary operators in React! This could appear directly in the JSX, but I think it makes the JSX cluttered
  // console.log("🚀 ~ Header ~ buttonText:", buttonText)

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <nav>
        <button onClick={handleToggleDarkMode}>{buttonText}</button>
      </nav>
    </header>
  );
};

export default Header;
