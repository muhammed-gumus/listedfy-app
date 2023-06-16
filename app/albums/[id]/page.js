"use client";

import { spotifyClient as spotifyClient } from "@/spotify/client";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <main className="flex flex-col items-center justify-center py-6 px-24  bg-black text-white font-inter font-medium">
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
          .
          <Link href="/" className="bg-white text-black p-2 px-4 rounded-full">
            Add Song
          </Link>
        </div>
      </nav>
      <div className="grid grid-cols-4 gap-8 items-center justify-center">
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
      {/* <pre>{JSON.stringify({ params: karams }, null, 2)}</pre>
      <pre>{JSON.stringify({ response }, null, 2)}</pre> */}
    </main>
  );
}
