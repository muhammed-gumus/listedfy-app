"use client";

import { spotifyClient as spotifyClient } from "@/spotify/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Artists({ params: karams }) {
  const [response, setResponse] = useState();

  useEffect(() => {
    const effect = async () => {
      const resp = await spotifyClient.artists.get(karams.id);
      setResponse(resp);
    };
    effect();
  }, [karams.id]);

console.log(response);
  return (
    <main className="flex flex-col items-center p-24">
      <div>
        {response &&
          response.items.map(({ track }) => (
            <Link
              key={track.id}
              href={`/tracks/${track.id}`}
              className="flex"
            >
              <img
                src={track.album.images[0].url}
                alt={`${track.name} playlist image`}
                priority
                width={150}
              />
              <div>{track.name}album</div>
            </Link>
          ))}
      </div>
      <div>
        {response && response.name}
      </div>
    </main>
  );
}
