import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-300 ${
        theme === "light"
          ? "bg-slate-100 text-black"
          : "bg-zinc-950 text-white"
      }`}
    >
      <div
        className={`p-10 rounded-2xl shadow-lg text-center space-y-4 ${
          theme === "light"
            ? "bg-white"
            : "bg-zinc-800"
        }`}
      >
        <h1 className="text-3xl font-bold">
          {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </h1>

        <button
          onClick={toggleTheme}
          className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:scale-105 transition"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default App;