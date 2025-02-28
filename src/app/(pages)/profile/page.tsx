





"use client";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  // State for user profile
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState("/default-avatar.png"); // Default avatar
  const [uploadedMemes, setUploadedMemes] = useState<{ id: number; image: string; caption: string }[]>([]);
  const [likedMemes, setLikedMemes] = useState<{ id: number; image: string; caption: string }[]>([]);

  // Load user data from local storage
  useEffect(() => {
    const savedName = localStorage.getItem("user_name");
    const savedBio = localStorage.getItem("user_bio");
    const savedPic = localStorage.getItem("user_profilePic");
    const savedUploads = JSON.parse(localStorage.getItem("userMemes") || "[]");
    const savedLikes = JSON.parse(localStorage.getItem("likedMemes") || "[]");

    if (savedName) setName(savedName);
    if (savedBio) setBio(savedBio);
    if (savedPic) setProfilePic(savedPic);
    if (savedUploads) setUploadedMemes(savedUploads);
    if (savedLikes) setLikedMemes(savedLikes);
  }, []);

  // Handle profile picture upload
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setProfilePic(imageUrl);
        localStorage.setItem("user_profilePic", imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle name change
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);
    localStorage.setItem("user_name", newName);
  };

  // Handle bio change
  const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newBio = event.target.value;
    setBio(newBio);
    localStorage.setItem("user_bio", newBio);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white">User Profile</h1>

      {/* Profile Picture */}
      <label className="relative cursor-pointer mt-4">
        <img
          src={profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-gray-300 object-cover shadow-lg"
        />
        <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 rounded-md text-xs">
          Edit
        </div>
      </label>

      {/* Name Input */}
      {/* <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
        className="mt-4 p-2 text-lg border rounded-md text-center w-64 dark:bg-gray-800 dark:text-white"
      /> */}

      {/* Bio Input */}
      {/* <textarea
        value={bio}
        onChange={handleBioChange}
        placeholder="Write your bio..."
        className="mt-4 p-2 border rounded-md text-center w-64 h-20 dark:bg-gray-800 dark:text-white"
      /> */}
{/* Name Input */}
<input
  type="text"
  value={name}
  onChange={handleNameChange}
  placeholder="Enter your name"
  className="mt-4 p-2 text-lg border rounded-md text-center w-64 bg-white text-black dark:bg-gray-800 dark:text-purple-400"
/>

{/* Bio Input */}
<textarea
  value={bio}
  onChange={handleBioChange}
  placeholder="Write your bio..."
  className="mt-4 p-2 border rounded-md text-center w-64 h-20 bg-white text-black dark:bg-gray-800 dark:text-purple-400"
/>

      <p className="mt-2 text-gray-600 dark:text-gray-300">Your changes are automatically saved.</p>

      {/* Uploaded Memes */}
      <div className="mt-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-3">Your Uploaded Memes</h2>
        {uploadedMemes.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {uploadedMemes.map((meme) => (
              <div key={meme.id} className="border p-2 rounded-lg">
                <img src={meme.image} alt="Uploaded Meme" className="w-full rounded-lg shadow-md" />
                <p className="text-sm text-gray-700 mt-1">{meme.caption}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">You haven&apos;t uploaded any memes yet.</p>
        )}
      </div>

      {/* Liked Memes */}
      <div className="mt-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-3">Liked Memes</h2>
        {likedMemes.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {/* {likedMemes.map((meme) => (
              <div key={meme.id} className="border p-2 rounded-lg">
                <img src={meme.image} alt="Liked Meme" className="w-full rounded-lg shadow-md" />
                <p className="text-sm text-gray-700 mt-1">{meme.caption}</p>
              </div>
            ))} */}
            {likedMemes.map((meme, index) => (
  <div key={`${meme.id}-${index}`} className="border p-2 rounded-lg">
    <img src={meme.image} alt="Liked Meme" className="w-full rounded-lg shadow-md" />
  </div>
))}

          </div>
        ) : (
          <p className="text-gray-500">You haven&apos;t liked any memes yet.</p>
        )}
      </div>
    </div>
  );
}


