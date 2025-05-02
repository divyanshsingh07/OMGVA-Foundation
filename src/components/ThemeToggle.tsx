import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 z-50 border border-gray-200 dark:border-gray-700"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-gray-800 dark:text-gray-200" />
      ) : (
        <Sun className="w-4 h-4 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
};

export default ThemeToggle; 