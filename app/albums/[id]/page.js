"use client";

import { spotifyClient as spotifyClient } from "@/spotify/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {Navbar} from "../../components/Navbar"

export default function Category({ params: karams }) {
  const [response, setResponse] = useState();

  useEffect(() => {
    const effect = async () => {
      const resp = await spotifyClient.playlists.getPlaylistItems(karams.id);
      setResponse(resp);
    };
    effect();
  }, [karams.id]);
  console.log(response);
  return (
    <main className="flex flex-col w-full h-full items-center justify-center py-6 px-24  bg-black text-white font-inter font-medium">
      <Navbar/>
      <div className="grid grid-cols-4 gap-8 w-full h-full items-center justify-center">
        {response &&
          response.items.map(({ track }) => (
            <div className="">
              <Link
                key={track.id}
                href={`/tracks/${track.id}`}
                className="flex flex-col gap-2"
              >
                <img
                  src={track.album.images[0].url}
                  alt={`${track.name} playlist image`}
                  priority
                />
                <div className="text-center items-center flex flex-col">
                  <div className="flex flex-row gap-4">
                    {track.artists.map(({ name }) => (
                      <div>{name}</div>
                    ))}
                  </div>
                  <p className="">{track.name}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
      <div>{response && response.name}</div>
    </main>
  );
}
