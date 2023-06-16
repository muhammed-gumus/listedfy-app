"use client";
import { spotifyClient as spotifyClient } from "@/spotify/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TextLoop } from "react-text-loop-next";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-6 px-24  bg-black text-white font-inter">
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

        <Link href="/">
          <span className="bg-gradient-to-r from-amber-400 to-white bg-clip-text text-transparent opacity-60 hover:opacity-100">
            Add Song
          </span>
        </Link>
      </nav>
      <div className="flex flex-row items-center justify-beetween">
        <div className="flex flex-col gap-4">
          <p className="text-7xl font-extrabold">
            Discover the best
            <br />
            of the music world.
          </p>
          <p className="opacity-70 text-lg">
            Unique music, playlists and singers all together. While <br />
            discovering new songs, you can access all kinds of information
            <br />
            about songs and singers, and experience songs that interest you.
          </p>
          <div className="flex flex-row gap-8">
            <a target="_blank" href="https://mami.dev/">
              <button class="mt-4 group relative h-12 w-48 overflow-hidden rounded-full bg-white text-lg shadow">
                <div class="absolute inset-0 w-6 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span class="relative text-black group-hover:text-white">
                  Connect to me!
                </span>
              </button>
            </a>
            <Link href={`playlists/}`}>
              <button class="mt-4 group relative h-12 w-48 overflow-hidden rounded-full bg-white text-lg shadow">
                <div class="absolute inset-0 w-6 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span class="relative text-black group-hover:text-white">
                  Discover!
                </span>
              </button>
            </Link>
          </div>
        </div>
        <img className="max-w-lg	" src="headset.png" />
      </div>
    </main>
  );
}

// "use client";
// import { spotifyClient as spotifyClient } from "@/spotify/client";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [response, setCategories] = useState();
//   const [art, setArt] = useState();
//   const [pipe, setPipe] = useState([]);

//   useEffect(() => {
//     (async () => {
//       await fetch("https://eo4xt0cnv5dqoas.m.pipedream.net")
//         .then((res) => res.json())
//         .then((data) => {
//           setPipe(data);
//         })
//         .catch((error) => console.error(error));
//     })();
//   }, []);
//   console.log(pipe);

//   useEffect(() => {
//     const effect = async () => {
//       const cat = await spotifyClient.browse.getCategories();
//       setCategories(cat);
//     };
//     effect();
//   }, []);

//   console.log(">>>", response?.categories.items);

//   return (
//     <main className="flex flex-col items-center py-6 px-24  bg-black text-white font-inter font-medium">
//       <nav className="flex items-center justify-between w-full pb-12">
//       <Link
//           href="/"
//           className="flex flex-row items-center justify-center gap-4"
//         >
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Konya_Teknik_%C3%9Cniversitesi_logo.svg/2048px-Konya_Teknik_%C3%9Cniversitesi_logo.svg.png"
//             alt="Logo"
//             className="w-24 h-24 bg-white rounded-full"
//           />
//           <h1 className="text-2xl font-semibold">LISTEDFY</h1>
//         </Link>
//         <div>.
//           <Link href="/" className="bg-white text-black p-2 px-4 rounded-full">
//             Add Song
//           </Link>
//         </div>
//       </nav>
//       <div className="grid grid-cols-4 gap-8">
//         {response &&
//           response.categories.items.map((category) => (
//             <Link
//               key={category.id}
//               href={`playlists/${category.id}`}
//               className="flex relative items-end justify-center text-lg"
//             >
//               <img
//                 src={category.icons[0].url}
//                 alt={`${category.name} category image`}
//                 priority
//               />
//               <div className="w-full text-center text-xl text-white absolute pb-4">{category.name}</div>
//             </Link>
//           ))}
//       </div>

//       {/* <pre>{JSON.stringify(pipe, null, 4)}</pre>
//       <pre>{JSON.stringify(response, null, 4)}</pre> */}
//     </main>
//   );
// }
