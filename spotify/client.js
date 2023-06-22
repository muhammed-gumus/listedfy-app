"use client";

import { SpotifyApi } from "@spotify/web-api-ts-sdk";

export const spotifyClient = SpotifyApi.withUserAuthorization(
  "516d129736954da29b9d16c83d9d1e93",
  "http://localhost:3000/categories",
  []
);
