"use client";

import { SpotifyApi } from "@spotify/web-api-ts-sdk";
const callbackUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000/categories" : "https://listedfy-app-git-main-muhammed-gumus.vercel.app/"
export const spotifyClient = SpotifyApi.withUserAuthorization(
  "516d129736954da29b9d16c83d9d1e93",
  callbackUrl,
  []
);
