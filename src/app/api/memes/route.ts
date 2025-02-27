// import { NextResponse } from "next/server";

// export async function GET(req: Request) { 
//   try {
//     const memes = [
//       { id: 1, image: "/meme1.jpg", caption: "Funny meme", likes: 10, comments: 5, date: "2024-02-25", category: "Trending" },
//       { id: 2, image: "/meme2.jpg", caption: "Another meme", likes: 20, comments: 3, date: "2024-02-24", category: "New" }
//     ];

//     return NextResponse.json(memes);
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to fetch memes" }, { status: 500 });
//   }
// }
// import { NextResponse } from "next/server";

// export async function GET(req: Request) {
//   try {
//     const response = await fetch("https://api.imgflip.com/get_memes");
//     const data = await response.json();

//     if (!data.success) {
//       throw new Error("Failed to fetch memes");
//     }

//     // Map data to match your structure
//     const memes = data.data.memes.map((meme: any) => ({
//       id: meme.id,
//       image: meme.url,
//       caption: meme.name,
//       likes: Math.floor(Math.random() * 100), // Generating random likes
//       comments: Math.floor(Math.random() * 20), // Generating random comments
//       date: new Date().toISOString(), // Generating current date
//       category: "Trending", // Default category
//     }));

//     return NextResponse.json(memes);
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to fetch memes" }, { status: 500 });
//   }
// // }
// import { NextResponse } from "next/server";

// export async function GET(req: Request) {
//   try {
//     // Get query parameters for pagination
//     const { searchParams } = new URL(req.url);
//     const page = parseInt(searchParams.get("page") || "1");
//     const limit = parseInt(searchParams.get("limit") || "10");

//     // Fetch memes from Imgflip API
//     const response = await fetch("https://api.imgflip.com/get_memes");
//     const data = await response.json();

//     if (!data.success) {
//       throw new Error("Failed to fetch memes");
//     }

//     // Map the response to match your format
//     const memes = data.data.memes.map((meme: any) => ({
//       id: meme.id,
//       image: meme.url,
//       caption: meme.name,
//       likes: Math.floor(Math.random() * 100),
//       comments: Math.floor(Math.random() * 20),
//       date: new Date().toISOString(),
//       category: "Trending",
//     }));

//     // Implement pagination logic
//     const startIndex = (page - 1) * limit;
//     const paginatedMemes = memes.slice(startIndex, startIndex + limit);

//     return NextResponse.json({
//       memes: paginatedMemes,
//       totalPages: Math.ceil(memes.length / limit),
//     });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to fetch memes" }, { status: 500 });
//   }
// }



import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // Get query parameters for pagination
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    // Fetch memes from Imgflip API
    const response = await fetch("https://api.imgflip.com/get_memes");
    const data = await response.json();

    if (!data.success) {
      throw new Error("Failed to fetch memes");
    }

    // Map the response to match your format
    const memes = data.data.memes.map((meme: any) => ({
      id: meme.id,
      image: meme.url,
      caption: meme.name,
      likes: Math.floor(Math.random() * 100),
      comments: Math.floor(Math.random() * 20),
      date: new Date().toISOString(),
      category: "Trending",
    }));

    // Implement pagination logic
    const startIndex = (page - 1) * limit;
    const paginatedMemes = memes.slice(startIndex, startIndex + limit);

    return NextResponse.json({
      memes: paginatedMemes,
      totalPages: Math.ceil(memes.length / limit),
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch memes" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Meme ID is required" }, { status: 400 });
    }

    console.log(`Liking meme with ID: ${id}`);

    return NextResponse.json({ message: `Meme ${id} liked successfully!` });
  } catch (error) {
    return NextResponse.json({ error: "Failed to like meme" }, { status: 500 });
  }
}
