import http from "node:http";
import path from "node:path";
import { readFile, stat } from "node:fs/promises";

const root = path.resolve("out");
const port = Number(process.env.PORT || 3000);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".ico": "image/x-icon", ".woff2": "font/woff2", ".txt": "text/plain; charset=utf-8", ".xml": "application/xml; charset=utf-8" };

const server = http.createServer(async (request, response) => {
  try {
    if (!["GET", "HEAD"].includes(request.method)) {
      response.writeHead(405, { Allow: "GET, HEAD" }).end();
      return;
    }
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    let file = path.resolve(root, `.${pathname}`);
    if (file !== root && !file.startsWith(`${root}${path.sep}`)) {
      response.writeHead(403).end("Forbidden");
      return;
    }
    try {
      if ((await stat(file)).isDirectory()) file = path.join(file, "index.html");
      await stat(file);
    } catch {
      file = path.join(root, "404.html");
      response.statusCode = 404;
    }
    const content = await readFile(file);
    response.setHeader("Content-Type", types[path.extname(file)] || "application/octet-stream");
    response.setHeader("X-Content-Type-Options", "nosniff");
    response.end(request.method === "HEAD" ? undefined : content);
  } catch {
    response.writeHead(500).end("Build the site before starting the preview.");
  }
});

server.listen(port, "127.0.0.1", () => console.log(`Local: http://localhost:${port}`));
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => server.close(() => process.exit(0)));
