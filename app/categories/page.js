"use client";
import { spotifyClient as spotifyClient } from "@/spotify/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {Navbar} from "../components/Navbar"

export default function Home() {
  const [response, setCategories] = useState();
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
      <Navbar/>
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
