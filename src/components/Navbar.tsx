
// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState, useEffect } from "react";
// import DarkModeToggle from "./DarkModeToggle";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [darkMode, setDarkMode] = useState(false);

//   // Load dark mode preference from local storage
//   useEffect(() => {
//     const savedMode = localStorage.getItem("darkMode") === "true";
//     setDarkMode(savedMode);
//     document.documentElement.classList.toggle("dark", savedMode);
//   }, []);

//   // Toggle dark mode and save preference
//   const toggleDarkMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     localStorage.setItem("darkMode", newMode.toString());
//     document.documentElement.classList.toggle("dark", newMode);
//   };

//   // Function to highlight active link
//   const getLinkClasses = (href: string) =>
//     `px-4 py-2 rounded-md transition ${
//       pathname === href ? "bg-gray-700 text-white" : "hover:bg-gray-600"
//     }`;

//   return (
//     <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
//       {/* Logo */}
//       <Link href="/" className="text-xl font-bold">MemeVerse</Link>

//       {/* Navigation Links */}
//       <div className="flex items-center gap-4">
//         <Link href="/memes" className={getLinkClasses("/memes")}>Explore</Link>
//         <Link href="/upload" className={getLinkClasses("/upload")}>Upload</Link>
//         <Link href="/leaderboard" className={getLinkClasses("/leaderboard")}>Leaderboard</Link>
//         <Link href="/profile" className={getLinkClasses("/profile")}>Profile</Link>
        
//         {/* Dark Mode Toggle */}
//         {/* <button onClick={toggleDarkMode} className="ml-4 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">
//           {darkMode ? "🌙 Dark" : "☀️ Light"}
//         </button> */}
//          {/* Dark Mode Toggle */}
//          <DarkModeToggle />
//       </div>
//     </nav>
//   );
// }





"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from local storage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
  }, []);

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode);
  };

  // Function to highlight active link
  const getLinkClasses = (href: string) =>
    `px-4 py-2 rounded-md transition ${
      pathname === href ? "bg-gray-700 text-white" : "hover:bg-gray-600"
    }`;

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">MemeVerse</Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-4">
        <Link href="/memes" className={getLinkClasses("/memes")}>Explore</Link>
        <Link href="/upload" className={getLinkClasses("/upload")}>Upload</Link>
        <Link href="/leaderboard" className={getLinkClasses("/leaderboard")}>Leaderboard</Link>
        <Link href="/profile" className={getLinkClasses("/profile")}>Profile</Link>

        {/* Dark Mode Toggle */}
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </nav>
  );
}
