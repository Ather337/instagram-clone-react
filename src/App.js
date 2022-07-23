import "./App.css";
import { Home, Error } from "./pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  const [darkModes, setDarkMode] = useState(() => {
    return localStorage.getItem("dark-mode") === "true";
  });
  //Just toggle value
  const toggleDarkMode = () => {
    setDarkMode(!darkModes);
    localStorage.setItem("dark-mode", !darkModes);
  };

  return (
    <div className={darkModes ? "App dark" : "App bg-emerald-50"}>
      <div className="dark:bg-slate-800 min-h-screen dark:text-slate-400">
        <BrowserRouter>
          <Routes>
            <Route
              path=""
              element={<Home toggleDarkMode={toggleDarkMode} />}
            ></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
