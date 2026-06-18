import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const appsScriptUrl = process.env.APPS_SCRIPT_URL;

  if (!appsScriptUrl) {
    console.error("APPS_SCRIPT_URL is not set");
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const body = await req.json();

  try {
    const res = await fetch(appsScriptUrl, {
      method: "POST",
      // text/plain avoids a CORS preflight and is readable by Apps Script via e.postData.contents
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(body),
      // Don't follow the redirect — Apps Script returns a 302 on success,
      // and following it as GET in Node.js causes a 405/403.
      redirect: "manual",
    });

    // Apps Script always responds with 302 → follow it manually to read the actual result
    if (res.status === 302) {
      const location = res.headers.get("location");
      if (!location) throw new Error("302 with no Location header");

      const echoRes = await fetch(location);
      const data = await echoRes.json();
      console.log("[order] Apps Script result:", JSON.stringify(data));

      if (!data.success) {
        throw new Error(`Script error: ${data.error ?? "unknown"}`);
      }

      return NextResponse.json({ success: true });
    }

    if (res.status === 200) {
      return NextResponse.json({ success: true });
    }

    console.error("[order] Unexpected status:", res.status);
    return NextResponse.json(
      { error: `Apps Script returned ${res.status}` },
      { status: 502 }
    );
  } catch (err) {
    console.error("[order] Network error:", err);
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}
