// "use client";
// import { useState, useEffect } from "react";

// export default function DarkModeToggle() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     // Check if the user has a saved preference
//     const savedMode = localStorage.getItem("darkMode") === "true";
//     setDarkMode(savedMode);

//     // Apply the correct mode to the document
//     if (savedMode) {
//       document.documentElement.classList.add("dark");
//       document.body.classList.add("bg-gray-900", "text-white"); // Apply body styles
//     } else {
//       document.documentElement.classList.remove("dark");
//       document.body.classList.remove("bg-gray-900", "text-white");
//       document.body.classList.add("bg-white", "text-black");
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     localStorage.setItem("darkMode", newMode.toString());

//     if (newMode) {
//       document.documentElement.classList.add("dark");
//       document.body.classList.add("bg-gray-900", "text-white");
//       document.body.classList.remove("bg-white", "text-black");
//     } else {
//       document.documentElement.classList.remove("dark");
//       document.body.classList.remove("bg-gray-900", "text-white");
//       document.body.classList.add("bg-white", "text-black");
//     }
//   };

//   return (
//     <button onClick={toggleDarkMode} className="ml-4 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">
//       {darkMode ? "🌙 Dark" : "☀️ Light"}
//     </button>
//   );
// }
"use client";
import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user has a saved preference
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);

    // Apply the correct mode to the document
    if (savedMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-gray-900", "text-white"); // Dark mode styles
      document.body.classList.remove("bg-sky-200", "text-black");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.add("bg-sky-200", "text-black"); // Light mode styles
      document.body.classList.remove("bg-gray-900", "text-white");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());

    if (newMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-gray-900", "text-white");
      document.body.classList.remove("bg-sky-200", "text-black");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.add("bg-sky-200", "text-black");
      document.body.classList.remove("bg-gray-900", "text-white");
    }
  };

  return (
    <button onClick={toggleDarkMode} className="ml-4 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
