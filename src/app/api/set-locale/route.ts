import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const url = new URL(req.url);
    const locale = url.searchParams.get("locale") || "en";

    const res = NextResponse.json({ success: true });
    res.cookies.set("NEXT_LOCALE", locale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
    });

    return res;
}
