"use client";

import { spotifyClient } from "@/spotify/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Category({ params }) {
  const [response, setResponse] = useState();

  useEffect(() => {
    const effect = async () => {
      const cat = await spotifyClient.browse.getPlaylistsForCategory(
        params.category
      );

      setResponse(cat);
    };
    effect();
  }, [params.category]);

  return (
    <main className="flex flex-col items-center h-full w-full py-6 px-24  bg-black text-white font-inter font-medium">
      <nav className="flex items-center justify-between w-full pb-12">
        <Link
          href="/"
          className="flex flex-row items-center justify-center gap-4"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Konya_Teknik_%C3%9Cniversitesi_logo.svg/2048px-Konya_Teknik_%C3%9Cniversitesi_logo.svg.png"
            alt="Logo"
            className="w-24 h-24 bg-white rounded-full"
          />
          <span className="bg-gradient-to-r from-amber-400 to-white bg-clip-text text-4xl font-extrabold text-transparent">
            Listedfy
          </span>
        </Link>
        <Link href="/addSong">
          <button className="border-2 border-amber-400 text-white py-2 px-4 rounded-full hover:">
            Add Song
          </button>
        </Link>
      </nav>
      <div className="grid w-full h-full grid-cols-4 gap-8">
        {response &&
          response.playlists.items.map((playlist) => (
            <Link key={playlist.id} href={`/albums/${playlist.id}`}>
              <img
                src={playlist.images[0].url}
                alt={`${playlist.name} playlist image`}
                priority
              />
            </Link>
          ))}
      </div>
    </main>
  );
}
