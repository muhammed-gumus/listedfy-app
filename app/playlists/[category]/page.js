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
    <main className="flex flex-col items-center py-6 px-24  bg-black text-white font-inter font-medium">
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
          <h1 className="text-2xl font-semibold">LISTEDFY</h1>
        </Link>

        <div>
          <Link href="/" className="bg-white text-black p-2 px-4 rounded-full">
            Add Song
          </Link>
        </div>
      </nav>
      <div className="grid grid-cols-4 gap-8">
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
      {/* <pre>{JSON.stringify({ response }, null, 2)}</pre> */}
    </main>
  );
}
