"use client";
import { useState } from "react";

export default function MemeForm() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleUpload = async () => {
    // Implement Cloudinary or backend upload logic
    console.log("Uploading Meme:", { image, caption });
  };

  return (
    <div className="p-4 border rounded-lg">
      <input type="file" onChange={(e) => setImage(e.target.files?.[0])} />
      <input type="text" placeholder="Caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
      <button onClick={handleUpload} className="bg-blue-500 text-white p-2 rounded">Upload</button>
    </div>
  );
}
