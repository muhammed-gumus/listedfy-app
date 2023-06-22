"use client";

import { spotifyClient } from "@/spotify/client";
import { useEffect, useState } from "react";
import { Spotify } from "react-spotify-embed";
import { Navbar } from "../../components/Navbar";


export default function Tracks() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <main className="flex flex-col items-center justify-center py-6 px-24  bg-black text-white font-inter font-medium">
      <Navbar />
      <div>
        <div className="grid grid-cols-4 gap-8 w-full h-full items-center justify-center">
          {data &&
            Object.values(data).map((item, index) => (
              <a className="grid grid-cols-2">
                <img
                  src={item.fields.imageUrl}
                  key={index}
                  alt={`Image ${index}`}
                />
                <div>
                  <p>{item.fields.artistName}</p>
                  <p>{item.fields.songName}</p>
                </div>
              </a>
            ))}
        </div>
      </div>
    </main>
  );
}
