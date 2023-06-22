import { spotifyClient } from "@/spotify/client";
import { Spotify } from "react-spotify-embed";
import { Navbar } from "../components/Navbar";
import Link from "next/link";
import { ItemsContext } from "../context/items";
import { minifyItems } from "../airtable";

export default async function Tracks({ initialItems }) {
  //   useEffect(() => {
  //     fetch("https://eonuaw3o3jnhtw9.m.pipedream.net")
  //       .then((response) => response.json())
  //       .then((res) => {
  //         setData(res);
  //         console.log(res);
  //       })
  //       .catch((error) => console.log(error));
  //   }, []);

  function popular(popularity) {
    const pop = parseInt(popularity);
    if (pop < 30) {
      return "bg-red-600";
    } else if (pop < 60 && pop > 30) {
      return "bg-amber-500";
    } else {
      return "bg-lime-700";
    }
  }

  const res = await getData();
  console.log(res, "ress");

  return (
    <main className="flex flex-col items-center justify-center py-6 px-24  bg-black text-white font-inter font-medium">
      <Navbar />
      <div>
        <div className="grid grid-cols-4 gap-8 w-full h-full items-center justify-center">
          {res &&
            Object.values(res).map((item, index) => (
              <Link
                key={item.fields.id}
                href={`/tracks/${item.fields.id}`}
                className="flex flex-col gap-2 items-center"
              >
                {" "}
                <img
                  src={item.fields.imageUrl}
                  key={index}
                  alt={`Image ${index}`}
                />
                <div className="flex flex-row gap-2 justify-center items-center">
                  <p>{item.fields.artistName}</p>
                  <p>-</p>
                  <p>{item.fields.songName}</p>{" "}
                </div>
                <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${popular(
                      item.fields.followers
                    )}`}
                  >
                    {item.fields.followers}
                  </div>
                <p>@{item.fields.username}</p>
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
}

export async function getData(context) {
  try {
    const res = await fetch("https://listedfy-app-git-main-muhammed-gumus.vercel.app/api/listItems", {
      cache: "no-store"
    });
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
