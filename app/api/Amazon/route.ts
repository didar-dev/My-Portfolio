/// this is a amazon product info grabber
///it is for one of my projects but it is here
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const { Link } = await request.json();
  try {
    const data = await fetch(
      `http://api.scraperapi.com?api_key=${process.env.SCRAPER_API_KEY}&autoparse=true&url=${Link}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const json = await data.json();
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(json),
    };
  } catch (error) {
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(error),
    };
  }
}
