

"use client";
import { useState } from "react";
import Image from "next/image";

export default function UploadPage() {
  const [image, setImage] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle Image Selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // Fetch AI-Generated Caption

const generateAICaption = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.imgflip.com/get_memes"); // Replace with correct API
      const data = await response.json();
  
      if (data && data.success) {
        setCaption("This meme is hilarious! 😂"); // Placeholder AI-generated caption
      } else {
        throw new Error("Invalid API response");
      }
    } catch (error) {
      console.error("Error generating AI caption:", error);
      setCaption("Couldn't generate a caption 😢");
    }
    setLoading(false);
  };
  
  // Handle Upload (Mock for now)
//   const handleUpload = async () => {
//     if (!image) return alert("Please select an image!");

//     // Mock upload process (Replace with Cloudinary/Firebase)
//     console.log("Uploading meme:", { image, caption });

//     alert("Meme uploaded successfully!");
//   };
const handleUpload = async () => {
    if (!image) return alert("Please select an image!");
  
    const newMeme = {
      id: Date.now(),
      image: previewUrl,
      caption,
    };
  
    const storedMemes = JSON.parse(localStorage.getItem("userMemes") || "[]");
    localStorage.setItem("userMemes", JSON.stringify([...storedMemes, newMeme]));
  
    // Trigger a storage event manually to update Profile Page
    window.dispatchEvent(new Event("storage"));
  
    alert("Meme uploaded successfully!");
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Upload Your Meme</h1>

      {/* Image Upload Input */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4 p-2 border border-gray-600 rounded bg-gray-800"
      />

      {/* Preview Image */}
      {previewUrl && (
        <Image
          src={previewUrl}
          alt="Meme Preview"
          width={300}
          height={300}
          className="rounded-lg shadow-lg mb-4"
        />
      )}

      {/* Caption Input */}
      <textarea
        className="w-full max-w-md p-2 text-black rounded"
        placeholder="Enter your meme caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />

      {/* AI Caption Button */}
      <button
        onClick={generateAICaption}
        className="mt-3 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate AI Caption"}
      </button>

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        className="mt-4 bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
      >
        Upload Meme
      </button>
    </div>
  );
}



