// "use client";
// import { useState, useEffect } from "react";

// interface Meme {
//   id: string;
//   url: string;
//   likes: number;
//   uploader: string;
// }

// interface User {
//   name: string;
//   profilePic: string;
//   uploads: number;
//   totalLikes: number;
// }

// export default function LeaderboardPage() {
//   const [topMemes, setTopMemes] = useState<Meme[]>([]);
//   const [topUsers, setTopUsers] = useState<User[]>([]);

//   // Load leaderboard data
//   useEffect(() => {
//     const savedMemes = JSON.parse(localStorage.getItem("all_memes") || "[]");
//     const savedUsers = JSON.parse(localStorage.getItem("user_rankings") || "[]");

//     // Sort memes by likes (descending) and get top 10
//     const sortedMemes = savedMemes.sort((a: Meme, b: Meme) => b.likes - a.likes).slice(0, 10);
//     setTopMemes(sortedMemes);

//     // Sort users by engagement (likes + uploads)
//     const sortedUsers = savedUsers.sort(
//       (a: User, b: User) => b.totalLikes + b.uploads - (a.totalLikes + a.uploads)
//     );
//     setTopUsers(sortedUsers);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
//       <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Leaderboard</h1>

//       {/* Top 10 Most Liked Memes */}
//       <div className="mt-6 w-full max-w-3xl">
//         <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-3">Top 10 Memes</h2>
//         {topMemes.length > 0 ? (
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//             {topMemes.map((meme, index) => (
//               <div key={meme.id} className="relative">
//                 <span className="absolute top-1 left-1 bg-gray-800 text-white px-2 py-1 rounded-md text-sm">
//                   #{index + 1}
//                 </span>
//                 <img src={meme.url} alt="Top Meme" className="w-full rounded-lg shadow-md" />
//                 <p className="text-center mt-1 text-gray-600 dark:text-gray-300">
//                   ❤️ {meme.likes} Likes
//                 </p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500">No memes available.</p>
//         )}
//       </div>

//       {/* Top Users Based on Engagement */}
//       <div className="mt-10 w-full max-w-2xl">
//         <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-3">Top Users</h2>
//         <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
//           <thead>
//             <tr className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white">
//               <th className="p-2 border border-gray-300 dark:border-gray-700">Rank</th>
//               <th className="p-2 border border-gray-300 dark:border-gray-700">User</th>
//               <th className="p-2 border border-gray-300 dark:border-gray-700">Uploads</th>
//               <th className="p-2 border border-gray-300 dark:border-gray-700">Total Likes</th>
//             </tr>
//           </thead>
//           <tbody>
//             {topUsers.length > 0 ? (
//               topUsers.map((user, index) => (
//                 <tr key={index} className="text-center bg-white dark:bg-gray-900">
//                   <td className="p-2 border border-gray-300 dark:border-gray-700 font-bold">
//                     #{index + 1}
//                   </td>
//                   <td className="p-2 border border-gray-300 dark:border-gray-700 flex items-center gap-2 justify-center">
//                     <img
//                       src={user.profilePic || "/default-avatar.png"}
//                       alt="User Avatar"
//                       className="w-8 h-8 rounded-full"
//                     />
//                     {user.name}
//                   </td>
//                   <td className="p-2 border border-gray-300 dark:border-gray-700">{user.uploads}</td>
//                   <td className="p-2 border border-gray-300 dark:border-gray-700">{user.totalLikes}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={4} className="p-4 text-gray-500">
//                   No user rankings available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }



// "use client";
// import { useState, useEffect } from "react";

// interface Meme {
//   id: string;
//   url: string;
//   likes: number;
//   uploader: string;
// }

// interface User {
//   name: string;
//   profilePic: string;
//   uploads: number;
//   totalLikes: number;
// }

// export default function LeaderboardPage() {
//   const [topMemes, setTopMemes] = useState<Meme[]>([]);
//   const [topUsers, setTopUsers] = useState<User[]>([]);

//   useEffect(() => {
//     // Load memes and users from local storage
//     const savedMemes: Meme[] = JSON.parse(localStorage.getItem("all_memes") || "[]");
//     const savedUsers: User[] = JSON.parse(localStorage.getItem("user_rankings") || "[]");

//     // Sort memes by likes (descending) and get top 10
//     const sortedMemes = [...savedMemes]
//       .sort((a, b) => b.likes - a.likes)
//       .slice(0, 10);
//     setTopMemes(sortedMemes);

//     // Sort users by engagement (totalLikes + uploads) and get top 10
//     const sortedUsers = [...savedUsers]
//       .sort((a, b) => b.totalLikes + b.uploads - (a.totalLikes + a.uploads))
//       .slice(0, 10);
//     setTopUsers(sortedUsers);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-sky-200 dark:bg-gray-900 transition-all">
//       <h1 className="text-4xl font-bold text-gray-800 dark:text-white">🏆 Leaderboard 🏆</h1>

//       {/* Top 10 Most Liked Memes */}
//       <div className="mt-6 w-full max-w-3xl">
//         <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-3">🔥 Top 10 Memes</h2>
//         {topMemes.length > 0 ? (
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//             {topMemes.map((meme, index) => (
//               <div key={meme.id} className="relative bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
//                 <span className="absolute top-1 left-1 bg-gray-800 text-white px-2 py-1 rounded-md text-sm">
//                   #{index + 1}
//                 </span>
//                 <img src={meme.url} alt="Meme" className="w-full rounded-lg" />
//                 <p className="text-center mt-1 text-gray-600 dark:text-gray-300">
//                   ❤️ {meme.likes} Likes
//                 </p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500">No memes available.</p>
//         )}
//       </div>

//       {/* Top Users Based on Engagement */}
//       <div className="mt-10 w-full max-w-2xl">
//         <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-3">🌟 Top Users</h2>
//         <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
//           <thead>
//             <tr className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white">
//               <th className="p-2 border border-gray-300 dark:border-gray-700">Rank</th>
//               <th className="p-2 border border-gray-300 dark:border-gray-700">User</th>
//               <th className="p-2 border border-gray-300 dark:border-gray-700">Uploads</th>
//               <th className="p-2 border border-gray-300 dark:border-gray-700">Total Likes</th>
//             </tr>
//           </thead>
//           <tbody>
//             {topUsers.length > 0 ? (
//               topUsers.map((user, index) => (
//                 <tr key={index} className="text-center bg-white dark:bg-gray-900">
//                   <td className="p-2 border border-gray-300 dark:border-gray-700 font-bold">#{index + 1}</td>
//                   <td className="p-2 border border-gray-300 dark:border-gray-700 flex items-center gap-2 justify-center">
//                     <img
//                       src={user.profilePic || "/default-avatar.png"}
//                       alt="User Avatar"
//                       className="w-8 h-8 rounded-full"
//                     />
//                     <span className="font-medium">{user.name}</span>
//                   </td>
//                   <td className="p-2 border border-gray-300 dark:border-gray-700">{user.uploads}</td>
//                   <td className="p-2 border border-gray-300 dark:border-gray-700">{user.totalLikes}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={4} className="p-4 text-gray-500">No user rankings available.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// interface Meme {
//   id: number;
//   image: string;
//   caption: string;
//   likes: number;
// }

// export default function LeaderboardPage() {
//   const [topMemes, setTopMemes] = useState<Meme[]>([]);

//   useEffect(() => {
//     const storedMemes = JSON.parse(localStorage.getItem("topMemes") || "[]");
//     setTopMemes(storedMemes);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <h1 className="text-4xl font-bold text-center mb-6">Leaderboard - Top 10 Memes</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {topMemes.map((meme, index) => (
//           <div key={meme.id} className="border rounded-lg p-4 bg-gray-800 shadow-lg">
//             <p className="text-center font-bold">#{index + 1}</p>
//             <Image src={meme.image} alt="Meme" width={300} height={300} className="rounded-lg mb-2" />
//             <p className="text-center">{meme.caption}</p>
//             <p className="text-center text-yellow-500 font-bold">🔥 {meme.likes} Likes</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }






"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Meme {
  id: number;
  image: string;
  caption: string;
  likes: number;
}

interface User {
  name: string;
  profilePic: string;
  uploads: number;
  totalLikes: number;
}

export default function LeaderboardPage() {
  const [topMemes, setTopMemes] = useState<Meme[]>([]);
  const [topUsers, setTopUsers] = useState<User[]>([]);

  useEffect(() => {
    // Load memes from localStorage
    const storedMemes = JSON.parse(localStorage.getItem("topMemes") || "[]");
    setTopMemes(storedMemes);

    // Load users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("topUsers") || "[]");
    setTopUsers(storedUsers);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">🏆 Leaderboard - Top 10 Memes</h1>

      {/* Top Memes Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* {topMemes.map((meme, index) => (
          <div key={meme.id} className="border rounded-lg p-4 bg-gray-800 shadow-lg">
            <p className="text-center font-bold">#{index + 1}</p>
            <Image src={meme.image} alt="Meme" width={300} height={300} className="rounded-lg mb-2" />
            <p className="text-center">{meme.caption}</p>
            <p className="text-center text-yellow-500 font-bold">🔥 {meme.likes} Likes</p>
          </div>
        ))} */}
        {topMemes.map((meme, index) => (
  <div key={`${meme.id}-${index}`} className="border rounded-lg p-4 bg-gray-800 shadow-lg">
    <p className="text-center font-bold">#{index + 1}</p>
    <Image src={meme.image} alt="Meme" width={300} height={300} className="rounded-lg mb-2" />
    <p className="text-center">{meme.caption}</p>
    <p className="text-center text-yellow-500 font-bold">🔥 {meme.likes} Likes</p>
  </div>
))}

      </div>

      {/* Top Users Based on Engagement */}
      <div className="mt-10 w-full max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-white mb-3">🌟 Top Users</h2>
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 border border-gray-700">Rank</th>
              <th className="p-3 border border-gray-700">User</th>
              <th className="p-3 border border-gray-700">Uploads</th>
              <th className="p-3 border border-gray-700">Total Likes</th>
            </tr>
          </thead>
          <tbody>
            {topUsers.length > 0 ? (
              topUsers.map((user, index) => (
                <tr key={index} className="text-center bg-gray-800 border border-gray-700">
                  <td className="p-3 font-bold">#{index + 1}</td>
                  <td className="p-3 flex items-center gap-3 justify-center">
                    <Image
                      src={user.profilePic || "/default-avatar.png"}
                      alt="User Avatar"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span>{user.name}</span>
                  </td>
                  <td className="p-3">{user.uploads}</td>
                  <td className="p-3">{user.totalLikes}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-400">No user rankings available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
