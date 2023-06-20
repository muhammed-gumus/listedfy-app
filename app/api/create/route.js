import { table, getMinifiedItem } from "../../airtable";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { item } = req.body;
  try {
    const newRecords = await table.create(  ...item  );
    return NextResponse.json(getMinifiedItem(newRecords[0]));
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Something went wrong! 😕" });
  }
}
