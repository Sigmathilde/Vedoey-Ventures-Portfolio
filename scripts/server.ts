import { serve } from "https://deno.land/std@0.186.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.186.0/http/file_server.ts";

serve(async (req) => {
  const url = new URL(req.url);

  // Serve static files dynamically (CSS, JS, Images)
  if (url.pathname.startsWith("/styles") || url.pathname.startsWith("/scripts") || url.pathname.startsWith("/assets")) {
    return serveDir(req, { quiet: true }); // No fsRoot, serves from Deploy's environment
  }

  // Serve index.html for all other requests
  try {
    const file = await Deno.readTextFile("public/index.html");
    return new Response(file, {
      headers: { "Content-Type": "text/html; charset=UTF-8" },
    });
  } catch {
    return new Response("404 - Not Found", { status: 404 });
  }
});
