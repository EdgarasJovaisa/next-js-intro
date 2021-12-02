import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const {
    geo: { city = "", country = "", region = "" },
  } = req;
  const response = NextResponse.next();

  response.headers.set("x-custom-geo", `${city}, ${country}, ${region}`);

  return response;
}
