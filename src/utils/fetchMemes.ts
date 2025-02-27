export default async function fetchMemes() {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    return data.data.memes;
  }
  