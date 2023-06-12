"use client";

import { spotifyClient } from "@/spotify/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Tracks({ params }) {
  const [response, setResponse] = useState();

  useEffect(() => {
    const effect = async () => {
      const cat = await spotifyClient.tracks.get(params.id);

      setResponse(cat);
    };
    effect();
  }, [params.id]);

  return (
    <main className="flex flex-col items-center p-24">
      {/* <pre>{JSON.stringify({ params }, null, 2)}</pre> */}
      <div>{response && response.name}</div>
      <div>{response && <img src={response.album.images[0].url} />}</div>
      <div>{response && response.album.release_date}</div>
      <div>{response && response.album.uri}</div>
      
      {/* <pre>{JSON.stringify( response , null, 2)}</pre>  */}
      {/* <pre>{JSON.stringify( response.album , null, 2)}</pre> */}
    </main>
  );
}
