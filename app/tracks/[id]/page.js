"use client";

import { spotifyClient } from "@/spotify/client";
import { useEffect, useState } from "react";
import { Spotify } from "react-spotify-embed";
import {Navbar} from "../../components/Navbar"

export default function Tracks({ params }) {
  const [response, setResponse] = useState();
  const [art, setArt] = useState();
  const [artist_id, setArtist] = useState("");

  useEffect(() => {
    const effect = async () => {
      const cat = await spotifyClient.tracks.get(params.id);
      const artist_i = cat.artists[0]?.id ?? "";
      setArtist(artist_i);
      setResponse(cat);
    };
    effect();
  }, [params.id]);

  useEffect(() => {
    const effect = async () => {
      if (artist_id !== "") {
        const art1 = await spotifyClient.artists.get(artist_id);
        setArt(art1);
      }
    };
    effect();
  }, [artist_id]);
  console.log(response);

  return (
    <main className="flex flex-col items-center justify-center py-6 px-24  bg-black text-white font-inter font-medium">
      <Navbar/>
      <div className="grid grid-cols-2 gap-32">
        <div className="">
          {response && <img src={response.album.images[1].url} />}
        </div>

        <div className="flex flex-col items-left gap-4">
          <div className="flex flex-row gap-4">
            <div>{"Artists: "}</div>
            <div className="flex flex-row gap-4 opacity-70">
              {response &&
                response.artists.map(({ name }) => <div>{name}</div>)}
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div>{"Song:"}</div>
            <div className="opacity-70">{response && response.album.name}</div>
          </div>

          <div className="flex flex-row gap-4">
            <div>{"Followers:"}</div>
            <div className="opacity-70">{art && art.followers.total}</div>
          </div>
          <div className="flex flex-row gap-4">
            <div>{"Popularity:"}</div>
            <div className="opacity-70">{art && art.popularity}</div>
          </div>
          <div className="flex flex-row gap-4">
            <div>{"Date:"}</div>
            <div className="opacity-70">
              {response && response.album.release_date}
            </div>
          </div>
          <div>
            {response && (
              <Spotify
                className="w-full"
                wide
                link={response.external_urls.spotify}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
