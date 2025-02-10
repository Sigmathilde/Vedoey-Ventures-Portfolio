import { serve } from "https://deno.land/std@0.186.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.186.0/http/file_server.ts";

serve(async (req) => {
  const url = new URL(req.url);

  // Serve static files from the "public" folder
  if (url.pathname.startsWith("/styles") || url.pathname.startsWith("/scripts") || url.pathname.startsWith("/assets")) {
    return serveDir(req, { fsRoot: "public" }); // Make sure your files are inside "public/"
  }

  // Serve index.html for all other requests
  try {
    const file = await Deno.readFile("public/index.html");
    return new Response(file, {
      headers: { "Content-Type": "text/html" },
    });
  } catch {
    return new Response("404 - Not Found", { status: 404 });
  }
});
