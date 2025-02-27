"use client";
import { useEffect, useState } from "react";
import MemeCard from "../components/MemeCard";

export default function HomePage() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setMemes(data.data.memes.slice(0, 10)));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center">Trending Memes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {memes.map(meme => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </main>
  );
}
