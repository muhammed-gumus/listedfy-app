"use client";
import { table, minifyItems } from "../../utils/Airtable";
import { NextResponse } from 'next/server'

export async function GET(_req, res){
  try {
    const records = await table.select({}).firstPage();
    const minfiedItems = minifyItems(records);
    return NextResponse.json(minfiedItems);
  } catch (error) {
    console.error(err);
    return NextResponse.json({ msg: "Something went wrong! 😕" });
  }
};