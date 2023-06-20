"use client";
import { spotifyClient as spotifyClient } from "@/spotify/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Spotify } from "react-spotify-embed";
import { FormModal } from "../components/Modal";

let debounceTimeout;

function debounce(asyncFunction, delay = 1000) {
  // Clear the previous timeout if it exists
  clearTimeout(debounceTimeout);

  // Create a new Promise to wrap the asynchronous call
  return new Promise((resolve, reject) => {
    // Set a timeout to delay the execution of the async function
    debounceTimeout = setTimeout(async () => {
      try {
        const result = await asyncFunction();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }, delay);
  });
}

export default function Home() {
  const [art1, setart1] = useState();
  const [src, setSrc] = useState();

  useEffect(() => {
    const effect = async () => {
      if (src) {
        const art1 = await spotifyClient.search(src, ["track"]);
        setart1(art1);
        console.log(src);
        console.log(art1);
      }
    };
    debounce(effect);
  }, [src]);

  return (
    <main className="flex flex-col items-center py-6 px-24 bg-black text-white font-inter font-medium w-full h-full">
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

      <div className="mt-16 container mx-auto bg-amber-400 rounded-lg px-14 py-8 text-black">
        <form>
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-center font-bold text-4xl">
              Find Your Dream Music
            </h1>
            <p className="mx-auto font-normal text-sm my-6 max-w-lg">
              Enter the music you want to add and click the button. You can add
              the music you pushed from the results to your playlist .....
            </p>
          </div>
          <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
            <input
              className="outline-0 text-base text-gray-400 flex-grow px-2 focus:text-black"
              type="text"
              placeholder="Search your dream music"
              onChange={(e) => {
                setSrc(e.target.value);
              }}
            />
            {/* <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
              <button className="bg-black text-white text-base rounded-lg px-4 py-2 font-thin hover:bg-gradient-to-r from-amber-400 to-white text-transparent">
                Search
              </button>
            </div> */}
          </div>
        </form>
      </div>
      <div className="grid grid-cols-3 gap-8 w-full m-8 h-full items-center justify-center">
        {art1 &&
          art1.tracks &&
          art1.tracks.items &&
          art1.tracks.items.map((track) => (
            <div className="flex flex-col items-center justify-center">
              <Spotify
                className="w-full"
                wide
                link={track.album.external_urls.spotify}
              />

              <FormModal song={track} />
            </div>
          ))}
      </div>
      {/* <div>{art1 && art1.name}</div> */}
    </main>
  );
}
