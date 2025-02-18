import { useState } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  // State to track the current theme
  const [darkMode, setDarkMode] = useState(false);
  const [redParagraph, setRedParagraph] = useState(false); // State for red paragraph

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setRedParagraph(false); // Reset red paragraph state on dark mode toggle
  };

  // Function to toggle red paragraph
  const toggleRedParagraph = () => {
    setRedParagraph(!redParagraph);
  };

  return (
    <div className={`mx-auto lg:px-6 p-4 ${darkMode ? 'dark' : ''}`}>
      <Navbar />
      <Body />
      <Projects />
      <Footer />
      {/* Toggle button for dark mode */}
      <button
        className="fixed bottom-4 right-4 bg-gray-300 dark:bg-gray-700 rounded-full p-2"
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      {/* Button to toggle red paragraph */}
      <button
        className="fixed bottom-16 right-4 bg-gray-300 dark:bg-gray-700 rounded-full p-2"
        onClick={toggleRedParagraph}
      >
        Toggle Red Paragraph
      </button>
      {/* Paragraph with conditional red color */}
      <div className={`text-lg py-3 ${redParagraph ? 'text-red-500' : ''}`}>
        This is a paragraph.
      </div>
    </div>
  );
}

export default App;
