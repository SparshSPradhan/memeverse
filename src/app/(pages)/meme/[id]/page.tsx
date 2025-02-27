// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";

// interface Meme {
//   id: number;
//   image: string;
//   caption: string;
//   likes: number;
//   date: string;
//   comments: string[];
// }

// export default function MemeDetailPage({ params }: { params: { id: string } }) {
//   const router = useRouter();
//   const memeId = parseInt(params.id, 10);
  
//   const [meme, setMeme] = useState<Meme | null>(null);
//   const [likedMemes, setLikedMemes] = useState<number[]>([]);
//   const [comments, setComments] = useState<{ [key: number]: string[] }>({});
//   const [commentInput, setCommentInput] = useState("");

//   useEffect(() => {
//     // Fetch meme details
//     async function fetchMeme() {
//       try {
//         const res = await fetch(`/api/memes/${memeId}`);
//         if (!res.ok) throw new Error("Meme not found");
//         const data = await res.json();
//         setMeme(data);
//       } catch (error) {
//         console.error("Error fetching meme:", error);
//         router.push("/"); // Redirect to home if not found
//       }
//     }

//     fetchMeme();
//   }, [memeId, router]);

//   // Load liked memes & comments from localStorage
//   useEffect(() => {
//     const savedLikes = JSON.parse(localStorage.getItem("likedMemes") || "[]");
//     const savedComments = JSON.parse(localStorage.getItem("memeComments") || "{}");
//     setLikedMemes(savedLikes);
//     setComments(savedComments);
//   }, []);

//   // Save liked memes to localStorage when changed
//   useEffect(() => {
//     localStorage.setItem("likedMemes", JSON.stringify(likedMemes));
//   }, [likedMemes]);

//   // Save comments to localStorage when changed
//   useEffect(() => {
//     localStorage.setItem("memeComments", JSON.stringify(comments));
//   }, [comments]);

//   if (!meme) return <p className="text-center text-white mt-10">Loading...</p>;

//   // Handle like toggle
//   const toggleLike = () => {
//     setMeme((prevMeme) =>
//       prevMeme ? { ...prevMeme, likes: likedMemes.includes(memeId) ? prevMeme.likes - 1 : prevMeme.likes + 1 } : null
//     );

//     setLikedMemes((prev) =>
//       prev.includes(memeId) ? prev.filter((id) => id !== memeId) : [...prev, memeId]
//     );
//   };

//   // Handle adding comments
//   const addComment = () => {
//     if (!commentInput.trim()) return;
//     setComments((prev) => ({
//       ...prev,
//       [memeId]: [...(prev[memeId] || []), commentInput],
//     }));
//     setCommentInput("");
//   };

//   // Share Meme
//   const shareMeme = () => {
//     const url = `${window.location.origin}/meme/${memeId}`;
//     navigator.clipboard.writeText(url);
//     alert("Meme link copied!");
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <div className="max-w-2xl mx-auto bg-gray-800 p-4 rounded-lg shadow-lg">
//         <Image src={meme.image} alt="Meme" width={500} height={500} className="rounded-lg" />

//         <h1 className="text-xl font-bold text-center mt-2">{meme.caption}</h1>

//         <div className="flex justify-between items-center mt-2 text-gray-400 text-sm">
//           <button onClick={toggleLike} className="focus:outline-none transition transform active:scale-90">
//             {likedMemes.includes(memeId) ? "❤️ Liked" : "🤍 Like"} ({meme.likes})
//           </button>
//           <span>{new Date(meme.date).toLocaleDateString()}</span>
//         </div>

//         {/* Comment Section */}
//         <div className="mt-4">
//           <input
//             type="text"
//             placeholder="Add a comment..."
//             value={commentInput}
//             onChange={(e) => setCommentInput(e.target.value)}
//             className="w-full p-2 rounded bg-gray-700 text-white"
//           />
//           <button onClick={addComment} className="mt-2 w-full bg-blue-500 text-white p-2 rounded">
//             💬 Add Comment
//           </button>

//           <div className="mt-3 space-y-2">
//             {comments[memeId]?.map((comment, idx) => (
//               <p key={idx} className="text-sm text-gray-300 bg-gray-700 p-2 rounded">
//                 - {comment}
//               </p>
//             ))}
//           </div>
//         </div>

//         {/* Share Button */}
//         <button onClick={shareMeme} className="mt-4 w-full bg-green-500 text-white p-2 rounded">
//           📤 Share Meme
//         </button>

//         <Link href="/" className="block text-center mt-4 text-blue-400">
//           ← Back to Meme Explorer
//         </Link>
//       </div>
//     </div>
//   );
// // }
// "use client";
// import { useParams, useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// interface Meme {
//   id: number;
//   image: string;
//   caption: string;
//   likes: number;
//   date: string;
//   comments: string[];
// }

// export default function MemeDetailPage() {
//   const params = useParams(); // ✅ Get dynamic params
//   const router = useRouter();
//   const memeId = parseInt(params.id as string, 10); // Convert to number
  
//   const [meme, setMeme] = useState<Meme | null>(null);
//   const [likedMemes, setLikedMemes] = useState<number[]>([]);
//   const [comments, setComments] = useState<{ [key: number]: string[] }>({});
//   const [commentInput, setCommentInput] = useState("");

//   useEffect(() => {
//     async function fetchMeme() {
//       try {
//         const res = await fetch(`/api/memes/${memeId}`);
//         if (!res.ok) throw new Error("Meme not found");
//         const data = await res.json();
//         setMeme(data);
//       } catch (error) {
//         console.error("Error fetching meme:", error);
//         router.push("/"); // Redirect to home if not found
//       }
//     }

//     if (!isNaN(memeId)) fetchMeme();
//   }, [memeId, router]);

//   if (!meme) return <p className="text-center text-white mt-10">Loading...</p>;

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <h1 className="text-center text-xl">{meme.caption}</h1>
//       <Image src={meme.image} alt="Meme" width={500} height={500} className="mx-auto" />
//       <Link href="/" className="block text-center mt-4 text-blue-400">← Back</Link>
//     </div>
//   );
// }
