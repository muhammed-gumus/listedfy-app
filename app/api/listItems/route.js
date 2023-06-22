import { table, minifyItems } from "../../airtable";
import { NextResponse } from 'next/server'

export async function GET(_req, res){
  try {
    const records = await table.select({}).firstPage();
    const minfiedItems = minifyItems(records);

    console.log(minfiedItems, "mini");
    return NextResponse.json(minfiedItems);
  } catch (error) {
    console.error(err);
    return NextResponse.json({ msg: "Something went wrong! 😕" });
  }
};