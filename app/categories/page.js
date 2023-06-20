"use client";
import { spotifyClient as spotifyClient } from "@/spotify/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [response, setCategories] = useState();
  const [art, setArt] = useState();
  const [pipe, setPipe] = useState([]);

  useEffect(() => {
    (async () => {
      await fetch("https://eo4xt0cnv5dqoas.m.pipedream.net")
        .then((res) => res.json())
        .then((data) => {
          setPipe(data);
        })
        .catch((error) => console.error(error));
    })();
  }, []);
  console.log(pipe);

  useEffect(() => {
    const effect = async () => {
      const cat = await spotifyClient.browse.getCategories();
      setCategories(cat);
    };
    effect();
  }, []);

  console.log(">>>", response?.categories.items);

  return (
    <main className="flex flex-col items-center py-6 px-24  bg-black text-white font-inter font-medium">
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
      <div className="grid grid-cols-4 gap-8">
        {response &&
          response.categories.items.map((category) => (
            <Link
              key={category.id}
              href={`playlists/${category.id}`}
              className="flex relative items-end justify-center text-lg"
            >
              <img
                src={category.icons[0].url}
                alt={`${category.name} category image`}
                priority
              />
              <div className="w-full text-center text-xl text-white absolute pb-4">
                {category.name}
              </div>
            </Link>
          ))}
      </div>
    </main>
  );
}