"use client";

import { spotifyClient } from "@/spotify/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {Navbar} from "../../components/Navbar"

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
      <Navbar/>
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
