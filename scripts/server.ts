import { serveDir } from "https://deno.land/std@0.186.0/http/file_server.ts";

Deno.serve(async (req) => {
  const url = new URL(req.url);
  if (url.pathname.startsWith("/styles") || url.pathname.startsWith("/scripts")) {
    return serveDir(req, { fsRoot: "public" }); // Adjust "public" if needed
  }
  return new Response("Not Found", { status: 404 });
});
