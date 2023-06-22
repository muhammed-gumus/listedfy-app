import { table, getMinifiedItem } from "../../airtable";
import { NextResponse } from "next/server";

export async function POST(req) {
  const  res  = await req.json();
  console.log(res);
  try {
    const newRecords = await table.create(res);
    console.log(newRecords);
    return NextResponse.json(getMinifiedItem(newRecords[0]));
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Something went wrong! 😕" });
  }
}
