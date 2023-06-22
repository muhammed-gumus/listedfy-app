"use client";

import Link from "next/link";

export function Navbar() {
  return (
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
      <div className="flex flex-row gap-4">
        <Link href="/addSong">
          <button className=" text-white py-2 px-4 rounded-full hover:text-amber-400">
            Add Song
          </button>
        </Link>
        <Link href="/userSongs">
          <button className=" text-white py-2 px-4 rounded-full hover:text-amber-400">
            User Songs
          </button>
        </Link>
      </div>
    </nav>
  );
}
