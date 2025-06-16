

function Header({ darkMode, setDarkMode }) {
  return (
    <div className="header slide-down">
      <h1>MoodBoard</h1>
      <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
}
export default Header;
