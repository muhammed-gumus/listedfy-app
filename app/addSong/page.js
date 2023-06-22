"use client";
import { spotifyClient as spotifyClient } from "@/spotify/client";
import { useEffect, useState } from "react";
import { Spotify } from "react-spotify-embed";
import { FormModal } from "../components/Modal";
import { Navbar } from "../components/Navbar";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

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
      }
    };
    debounce(effect);
  }, [src]);

  return (
    <main className="flex flex-col items-center py-6 px-24 bg-black text-white font-inter font-medium w-full h-full">
      <Navbar />

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
      <div className="grid grid-cols-3 gap-6 w-full m-8 h-full items-center justify-center">
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

              <div className="flex w-full items-center justify-end">
                <FormModal song={track} />
                <p className="opacity-50">|</p>
                <Link key={track.id} href={`/tracks/${track.id}`}>
                  <Button
                    border="0px"
                    color="white"
                    borderTopRightRadius="sm"
                    borderTopLeftRadius="0"
                    colorScheme="teal"
                    variant="outline"
                    borderTop="0px"
                    _hover={{
                      color: "yellow.400",
                    }}
                  >
                    Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
      </div>
      {/* <div>{art1 && art1.name}</div> */}
    </main>
  );
}
