"use client";
import { spotifyClient as spotifyClient } from "@/spotify/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  return (
    <Navbar>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Konya_Teknik_%C3%9Cniversitesi_logo.svg/1200px-Konya_Teknik_%C3%9Cniversitesi_logo.svg.png" />
      <Link>Add Song</Link>
    </Navbar>
  );
}
