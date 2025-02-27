// export default function MemeCard({ meme }) {
//     return (
//       <div className="border rounded-lg p-4 shadow-md">
//         <img src={meme.url} alt={meme.name} className="w-full h-auto rounded-lg" />
//         <p className="text-center font-bold mt-2">{meme.name}</p>
//       </div>
//     );
//   }
  
"use client";
import { motion } from "framer-motion";

export default function MemeCard({ meme }) {
  return (
    <motion.div
      className="border rounded-lg p-4 shadow-md bg-gray-800 text-white overflow-hidden cursor-pointer relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      {/* Animated Image */}
      <motion.img
        src={meme.url}
        alt={meme.name}
        className="w-full h-auto rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Caption with Subtle Animation */}
      <motion.p
        className="text-center font-bold mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {meme.name}
      </motion.p>
    </motion.div>
  );
}
