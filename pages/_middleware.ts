import { NextRequest, NextResponse } from "next/server"

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const hostname = req.headers.get("host")

  if (pathname.startsWith(`/_sites`)) {
    return new Response(null, { status: 404 })
  }

  if (
    !pathname.includes(".") &&
    !pathname.startsWith("/api") &&
    hostname !== process.env.ROOT_URL
  ) {
    return NextResponse.rewrite(`/_sites/${hostname}${pathname}`)
  }
}
