const Header = ({ isDarkMode, onToggleDarkMode }) => {
  // const toggleDarkMode = () => { // moved to App and renamed onToggleDarkMode
  //   setIsDarkMode(isDarkMode => !isDarkMode)
  // }

  const handleToggleDarkMode = () => {
    // toggleDarkMode();
    onToggleDarkMode();
  };

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleToggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
