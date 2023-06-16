"use client";

import { spotifyClient } from "@/spotify/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Spotify } from "react-spotify-embed";

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
      {/* <pre>{JSON.stringify({ params }, null, 2)}</pre> */}
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
      <div className="grid grid-cols-2 gap-32">
        <div className="">
          {response && <img src={response.album.images[1].url} />}
        </div>

        <div className="flex flex-col items-left gap-4">
          <div className="flex flex-row gap-4">
            <div>{"Şarkıcı Adı: "}</div>
            <div className="flex flex-row gap-4">
              {response &&
                response.artists.map(({ name }) => <div>{name}</div>)}
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div>{"Şarkı Adı:"}</div>
            {response && response.album.name}
          </div>

          <div className="flex flex-row gap-4">
            <div>{"Takipçi Sayısı:"}</div>
            <div>{art && art.followers.total}</div>
          </div>
          <div className="flex flex-row gap-4">
            <div>{"Yüklenme Tarihi:"}</div>
            <div>{response && response.album.release_date}</div>
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
