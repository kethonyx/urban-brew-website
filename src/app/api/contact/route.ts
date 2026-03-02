import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Basic shape validation for demonstration purposes
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    );
  }

  // In a real application, you might send an email or persist to a database here.
  await new Promise((resolve) => setTimeout(resolve, 600));

  return NextResponse.json({ ok: true }, { status: 200 });
}

