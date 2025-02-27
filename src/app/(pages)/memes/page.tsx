



// "use client";
// import { useEffect, useState, useRef, useCallback } from "react";
// import Image from "next/image";

// interface Meme {
//   id: number;
//   image: string;
//   caption: string;
//   likes: number;
//   date: string;
//   comments: number;
//   category: string;
// }

// const categories = ["Trending", "New", "Classic", "Random"];
// const sortOptions = ["Likes", "Date", "Comments"];

// export default function MemeExplorerPage() {
//   const [memes, setMemes] = useState<Meme[]>([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("Trending");
//   const [sortBy, setSortBy] = useState("Likes");

//   const observer = useRef<IntersectionObserver | null>(null);
//   const lastMemeRef = useRef<HTMLDivElement | null>(null);

 
// const fetchMemes = async (pageNum = 1, category = selectedCategory, query = searchQuery) => {
//     setLoading(true);
//     try {
//       const res = await fetch(`/api/memes?page=${pageNum}&category=${category}&search=${query}`);
//       console.log("API Response:", res); // ✅ Log to check response status
//       if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
  
//       const data = await res.json();
//       console.log("Fetched Memes:", data); // ✅ Log JSON response
//       if (pageNum === 1) {
//         setMemes(data);
//       } else {
//         setMemes((prevMemes) => [...prevMemes, ...data]);
//       }
//     } catch (error) {
//       console.error("Error fetching memes:", error);
//     }
//     setLoading(false);
//   };
  
//   // Infinite scrolling setup
//   useEffect(() => {
//     if (loading) return;

//     observer.current = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setPage((prevPage) => prevPage + 1);
//         }
//       },
//       { threshold: 1.0 }
//     );

//     if (lastMemeRef.current) observer.current.observe(lastMemeRef.current);

//     return () => observer.current?.disconnect();
//   }, [loading]);

//   // Fetch memes when page changes
//   useEffect(() => {
//     fetchMemes(page);
//   }, [page]);

//   // Fetch memes when category changes
//   useEffect(() => {
//     setPage(1);
//     fetchMemes(1);
//   }, [selectedCategory]);

//   // Debounced search
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setPage(1);
//       fetchMemes(1);
//     }, 500);
//     return () => clearTimeout(timeout);
//   }, [searchQuery]);

//   // Sort memes dynamically
//   const sortedMemes = [...memes].sort((a, b) => {
//     if (sortBy === "Likes") return b.likes - a.likes;
//     if (sortBy === "Date") return new Date(b.date).getTime() - new Date(a.date).getTime();
//     if (sortBy === "Comments") return b.comments - a.comments;
//     return 0;
//   });

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <h1 className="text-4xl font-bold text-center mb-6">Meme Explorer</h1>

//       {/* Search & Filters */}
//       <div className="flex flex-wrap justify-center gap-4 mb-6">
//         {/* Search Input */}
//         <input
//           type="text"
//           placeholder="Search memes..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="p-2 border rounded bg-gray-800 text-white"
//         />

//         {/* Category Filter */}
//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="p-2 border rounded bg-gray-800 text-white"
//         >
//           {categories.map((cat) => (
//             <option key={cat} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>

//         {/* Sort Dropdown */}
//         <select
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//           className="p-2 border rounded bg-gray-800 text-white"
//         >
//           {sortOptions.map((option) => (
//             <option key={option} value={option}>
//               Sort by {option}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Meme Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       
// {sortedMemes.map((meme, index) => (
//   <div key={`${meme.id}-${index}`} className="border rounded-lg p-4 bg-gray-800 shadow-lg">
//     <Image
//       src={meme.image}
//       alt="Meme"
//       width={300}
//       height={300}
//       className="rounded-lg mb-2"
//       unoptimized // ✅ Helps if external images are not loading
//     />
//     <p className="text-center">{meme.caption}</p>
//     <div className="flex justify-between text-sm text-gray-400 mt-2">
//       <span>❤️ {meme.likes}</span>
//       <span>💬 {meme.comments}</span>
//       <span>{new Date(meme.date).toLocaleDateString()}</span>
//     </div>
//   </div>
// ))}


//       </div>

//       {/* Loading Indicator */}
//       {loading && <p className="text-center mt-6">Loading more memes...</p>}
//     </div>
//   );
// }



// "use client";
// import { useEffect, useState, useRef, useCallback } from "react";
// import Image from "next/image";

// interface Meme {
//   id: number;
//   image: string;
//   caption: string;
//   likes: number;
//   date: string;
//   comments: number;
//   category: string;
// }

// const categories = ["Trending", "New", "Classic", "Random"];
// const sortOptions = ["Likes", "Date", "Comments"];

// export default function MemeExplorerPage() {
//   const [memes, setMemes] = useState<Meme[]>([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("Trending");
//   const [sortBy, setSortBy] = useState("Likes");

//   const observer = useRef<IntersectionObserver | null>(null);

//   // Fetch memes
//   const fetchMemes = useCallback(async () => {
//     if (loading || !hasMore) return;

//     setLoading(true);
//     try {
//       const res = await fetch(`/api/memes?page=${page}&category=${selectedCategory}&search=${searchQuery}`);
//       if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

//       const data = await res.json();
//       setMemes((prevMemes) => [...prevMemes, ...data.memes]);
//       setHasMore(data.memes.length > 0);
//     } catch (error) {
//       console.error("Error fetching memes:", error);
//     }
//     setLoading(false);
//   }, [page, selectedCategory, searchQuery, loading, hasMore]);

//   // Fetch memes on page change
//   useEffect(() => {
//     fetchMemes();
//   }, [page]);

//   // Fetch memes when category or search changes
//   useEffect(() => {
//     setPage(1);
//     setMemes([]); // Reset memes when category or search changes
//     fetchMemes();
//   }, [selectedCategory, searchQuery]);

//   // IntersectionObserver for Infinite Scroll
//   const lastMemeRef = useCallback(
//     (node: HTMLDivElement) => {
//       if (loading) return;
//       if (observer.current) observer.current.disconnect();

//       observer.current = new IntersectionObserver(
//         (entries) => {
//           if (entries[0].isIntersecting && hasMore) {
//             setPage((prevPage) => prevPage + 1);
//           }
//         },
//         { threshold: 1.0 }
//       );

//       if (node) observer.current.observe(node);
//     },
//     [loading, hasMore]
//   );

//   // Sort memes dynamically
//   const sortedMemes = [...memes].sort((a, b) => {
//     if (sortBy === "Likes") return b.likes - a.likes;
//     if (sortBy === "Date") return new Date(b.date).getTime() - new Date(a.date).getTime();
//     if (sortBy === "Comments") return b.comments - a.comments;
//     return 0;
//   });

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <h1 className="text-4xl font-bold text-center mb-6">Meme Explorer</h1>

//       {/* Search & Filters */}
//       <div className="flex flex-wrap justify-center gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search memes..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="p-2 border rounded bg-gray-800 text-white"
//         />

//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="p-2 border rounded bg-gray-800 text-white"
//         >
//           {categories.map((cat) => (
//             <option key={cat} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>

//         <select
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//           className="p-2 border rounded bg-gray-800 text-white"
//         >
//           {sortOptions.map((option) => (
//             <option key={option} value={option}>
//               Sort by {option}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Meme Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {/* {sortedMemes.map((meme, index) => (
//           <div
//             key={meme.id}
//             ref={index === sortedMemes.length - 1 ? lastMemeRef : null}
//             className="border rounded-lg p-4 bg-gray-800 shadow-lg"
//           > */}
//           {sortedMemes.map((meme, index) => (
//   <div
//     key={`${meme.id}-${meme.date}`}
//     ref={index === sortedMemes.length - 1 ? lastMemeRef : null} // Attach observer to last meme
//     className="border rounded-lg p-4 bg-gray-800 shadow-lg"
//   >

//             <Image
//               src={meme.image}
//               alt="Meme"
//               width={300}
//               height={300}
//               className="rounded-lg mb-2"
//             />
//             <p className="text-center">{meme.caption}</p>
//             <div className="flex justify-between text-sm text-gray-400 mt-2">
//               <span>❤️ {meme.likes}</span>
//               <span>💬 {meme.comments}</span>
//               <span>{new Date(meme.date).toLocaleDateString()}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Loading Indicator */}
//       {loading && <p className="text-center mt-6">Loading more memes...</p>}
//     </div>
//   );
// }













"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

interface Meme {
  id: number;
  image: string;
  caption: string;
  likes: number;
  date: string;
  comments: string[]; // Now stores actual comments
  category: string;
}

const categories = ["Trending", "New", "Classic", "Random"];
const sortOptions = ["Likes", "Date", "Comments"];

export default function MemeExplorerPage() {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [likedMemes, setLikedMemes] = useState<number[]>([]); // Store liked meme IDs
  const [comments, setComments] = useState<{ [key: number]: string[] }>({}); // Store comments per meme
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  const [sortBy, setSortBy] = useState("Likes");

  const observer = useRef<IntersectionObserver | null>(null);

  // Load liked memes from localStorage on mount
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedMemes") || "[]");
    const savedComments = JSON.parse(localStorage.getItem("memeComments") || "{}");
    setLikedMemes(savedLikes);
    setComments(savedComments);
  }, []);

  // Save liked memes to localStorage when changed
  useEffect(() => {
    localStorage.setItem("likedMemes", JSON.stringify(likedMemes));
  }, [likedMemes]);

  // Save comments to localStorage when changed
  useEffect(() => {
    localStorage.setItem("memeComments", JSON.stringify(comments));
  }, [comments]);

  // Fetch memes
  const fetchMemes = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/memes?page=${page}&category=${selectedCategory}&search=${searchQuery}`);
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      const data = await res.json();
      setMemes((prevMemes) => [...prevMemes, ...data.memes]);
      setHasMore(data.memes.length > 0);
    } catch (error) {
      console.error("Error fetching memes:", error);
    }
    setLoading(false);
  }, [page, selectedCategory, searchQuery, loading, hasMore]);

  useEffect(() => {
    fetchMemes();
  }, [page]);

  useEffect(() => {
    setPage(1);
    setMemes([]); // Reset memes when category or search changes
    fetchMemes();
  }, [selectedCategory, searchQuery]);

  // Infinite Scroll IntersectionObserver
  const lastMemeRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPage((prevPage) => prevPage + 1);
          }
        },
        { threshold: 1.0 }
      );

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  // Like & Unlike Memes
//   const toggleLike = (id: number) => {
//     setLikedMemes((prev) =>
//       prev.includes(id) ? prev.filter((memeId) => memeId !== id) : [...prev, id]
//     );
//   };
const toggleLike = async (id: number) => {
    setMemes((prevMemes) =>
      prevMemes.map((meme) =>
        meme.id === id
          ? { ...meme, likes: likedMemes.includes(id) ? meme.likes - 1 : meme.likes + 1 }
          : meme
      )
    );
  
    setLikedMemes((prev) =>
      prev.includes(id) ? prev.filter((memeId) => memeId !== id) : [...prev, id]
    );
  
    try {
    //   const res = await fetch(`/api/memes/${id}/like`, { method: "POST" });
    const res = await fetch(`/api/memes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    } catch (error) {
      console.error("Error liking meme:", error);
    }
  };
  
  // Add comment to a meme
//   const addComment = (id: number, newComment: string) => {
//     if (!newComment.trim()) return;

//     setComments((prevComments) => ({
//       ...prevComments,
//       [id]: [...(prevComments[id] || []), newComment],
//     }));
//   };
const [commentInputs, setCommentInputs] = useState<{ [key: number]: string }>({});

const handleCommentChange = (id: number, text: string) => {
  setCommentInputs((prev) => ({ ...prev, [id]: text }));
};

// const addComment = async (id: number) => {
//   const newComment = commentInputs[id]?.trim();
//   if (!newComment) return;

//   try {
//     const res = await fetch(`/api/memes/${id}/comment`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ text: newComment }),
//     });

//     if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

//     setComments((prev) => ({
//       ...prev,
//       [id]: [...(prev[id] || []), newComment],
//     }));

//     setCommentInputs((prev) => ({ ...prev, [id]: "" }));
//   } catch (error) {
//     console.error("Error adding comment:", error);
//   }
// };

// const addComment = async (id: number) => {
//     const newComment = commentInputs[id]?.trim();
//     if (!newComment) return;
  
//     try {
//       const res = await fetch(`/api/memes/comment?id=${id}`, {  // 👈 Updated API path
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text: newComment }),
//       });
  
//       if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
  
//       setComments((prev) => ({
//         ...prev,
//         [id]: [...(prev[id] || []), newComment],
//       }));
  
//       setCommentInputs((prev) => ({ ...prev, [id]: "" }));
//     } catch (error) {
//       console.error("Error adding comment:", error);
//     }
//   };
const addComment = async (id: number) => {
    const newComment = commentInputs[id]?.trim();
    if (!newComment) return; // ✅ Prevent undefined errors
  
    try {
      const res = await fetch("/api/memes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, action: "comment", text: newComment }),
      });
  
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
  
      const data = await res.json();
      setComments((prev) => ({
        ...prev,
        [id]: [...(prev[id] || []), newComment], // ✅ Append new comment
      }));
  
      setCommentInputs((prev) => ({ ...prev, [id]: "" })); // ✅ Clear input field after posting
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };
  
  
  
  
  // Sort memes dynamically
  const sortedMemes = [...memes].sort((a, b) => {
    if (sortBy === "Likes") return b.likes - a.likes;
    if (sortBy === "Date") return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (sortBy === "Comments") return (b.comments?.length || 0) - (a.comments?.length || 0);
    return 0;
  });
  // Extract top 10 memes sorted by likes
const topMemes = [...memes]
.sort((a, b) => b.likes - a.likes)
.slice(0, 10);

useEffect(() => {
localStorage.setItem("topMemes", JSON.stringify(topMemes));
}, [topMemes]);


  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Meme Explorer</h1>

      {/* Search & Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search memes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded bg-gray-800 text-white"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded bg-gray-800 text-white"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded bg-gray-800 text-white"
        >
          {sortOptions.map((option) => (
            <option key={option} value={option}>
              Sort by {option}
            </option>
          ))}
        </select>
      </div>
      

      {/* Meme Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {sortedMemes.map((meme, index) => (
  <div
    key={`${meme.id}-${index}`}  // Ensures uniqueness even if ids repeat
    ref={index === sortedMemes.length - 1 ? lastMemeRef : null}
    className="border rounded-lg p-4 bg-gray-800 shadow-lg"
  >

            <Image src={meme.image} alt="Meme" width={300} height={300} className="rounded-lg mb-2" />
            <p className="text-center">{meme.caption}</p>

            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <button onClick={() => toggleLike(meme.id)} className="focus:outline-none">
                {likedMemes.includes(meme.id) ? "❤️ Liked" : "🤍 Like"} ({meme.likes})
              </button>
              <span>💬 {comments[meme.id]?.length || 0}</span>
              <span>{new Date(meme.date).toLocaleDateString()}</span>
            </div>

            {/* Comment Section */}
            {/* <div className="mt-2">
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full p-1 rounded bg-gray-700 text-white"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addComment(meme.id, (e.target as HTMLInputElement).value);
                    (e.target as HTMLInputElement).value = "";
                  }
                }}
              />
              {comments[meme.id]?.map((comment, idx) => (
                <p key={idx} className="text-xs text-gray-300 mt-1">- {comment}</p>
              ))}
            </div> */}
            {/* Comment Section */}
            <div className="mt-2">
  <input
    type="text"
    placeholder="Add a comment..."
    value={commentInputs[meme.id] || ""}
    onChange={(e) => handleCommentChange(meme.id, e.target.value)}
    className="w-full p-1 rounded bg-gray-700 text-white"
  />
  <button onClick={() => addComment(meme.id)} className="ml-2 text-blue-500">
    💬 Add
  </button>

  {comments[meme.id]?.map((comment, idx) => (
    <p key={idx} className="text-xs text-gray-300 mt-1">- {comment}</p>
  ))}
</div>


          </div>
        ))}
      </div>
    </div>
  );
}
