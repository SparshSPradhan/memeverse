// export default function NotFound() {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen text-center">
//         <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
//         <p className="text-gray-600">The page you are looking for does not exist.</p>
//       </div>
//     );
//   }
  

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  const [memeUrl, setMemeUrl] = useState<string | null>(null);

  // Fetch a random meme from the Meme API
  useEffect(() => {
    async function fetchMeme() {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const data = await response.json();
        if (data.success) {
          const memes = data.data.memes;
          const randomMeme = memes[Math.floor(Math.random() * memes.length)];
          setMemeUrl(randomMeme.url);
        }
      } catch (error) {
        console.error("Failed to fetch meme:", error);
      }
    }
    fetchMeme();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
      <h1 className="text-6xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-6">Oops! You seem lost in the MemeVerse. Enjoy a meme instead! 😆</p>

      {/* Meme Display */}
      {memeUrl ? (
        <Image
          src={memeUrl}
          alt="Funny Meme"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      ) : (
        <p className="text-gray-400">Loading meme... 🤔</p>
      )}

      {/* Back to Home Button */}
      <Link
        href="/"
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg"
      >
        🔙 Take Me Home
      </Link>
    </div>
  );
}
