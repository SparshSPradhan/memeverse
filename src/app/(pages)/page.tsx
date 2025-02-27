"use client";
import { useEffect, useState } from "react";
import MemeCard from "@/components/MemeCard";
import fetchMemes from "@/utils/fetchMemes";

export default function Home() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetchMemes().then(setMemes);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {memes.map((meme) => (
        <MemeCard key={meme.id} meme={meme} />
      ))}
    </div>
  );
}

