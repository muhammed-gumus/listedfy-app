"use client";
import Link from "next/link";
import {Navbar} from "./components/Navbar"

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-full py-6 px-24  bg-black text-white font-inter">
     <Navbar/>
      <div className="flex flex-row items-center">
        <div className="flex flex-col gap-4">
          <p className="text-7xl font-extrabold">
            Discover the best
            <br />
            of the{" "}
            <span className="bg-gradient-to-r from-amber-400 to-white bg-clip-text text-transparent">
              music
            </span>{" "}
            world.
          </p>
          <p className="opacity-70 text-lg">
            Unique music, playlists and singers all together. While <br />
            discovering new songs, you can access all kinds of information
            <br />
            about songs and singers, and experience songs that interest you.
          </p>
          <div className="flex flex-row gap-8">
            <a target="_blank" href="https://mami.dev/">
              <button className="mt-4 group relative h-12 w-48 overflow-hidden rounded-full bg-white text-lg shadow">
                <div className="absolute inset-0 w-6 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black ">Connect to me!</span>
              </button>
            </a>
            <Link href={`/categories/`}>
              <button className="mt-4 group relative h-12 w-48 overflow-hidden rounded-full bg-white text-lg shadow">
                <div className="absolute inset-0 w-6 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black ">Discover!</span>
              </button>
            </Link>
          </div>
        </div>
        <img className="max-w-lg	" src="headset.png" />
      </div>
    </main>
  );
}
