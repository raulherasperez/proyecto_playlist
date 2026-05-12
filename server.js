const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 8000);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".mp3": "audio/mpeg",
  ".pdf": "application/pdf"
};

function send(response, status, body, type = "text/plain; charset=utf-8") {
  response.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": "no-store"
  });
  response.end(body);
}

function streamFile(request, response, filePath, type) {
  fs.stat(filePath, (statError, stat) => {
    if (statError || !stat.isFile()) {
      send(response, 404, "Not found");
      return;
    }

    const range = request.headers.range;

    if (!range) {
      response.writeHead(200, {
        "Content-Type": type,
        "Content-Length": stat.size,
        "Accept-Ranges": "bytes",
        "Cache-Control": "no-store"
      });
      fs.createReadStream(filePath).pipe(response);
      return;
    }

    const match = range.match(/^bytes=(\d*)-(\d*)$/);
    if (!match) {
      response.writeHead(416, { "Content-Range": `bytes */${stat.size}` });
      response.end();
      return;
    }

    const start = match[1] === "" ? 0 : Number(match[1]);
    const end = match[2] === "" ? stat.size - 1 : Number(match[2]);

    if (start >= stat.size || end >= stat.size || start > end) {
      response.writeHead(416, { "Content-Range": `bytes */${stat.size}` });
      response.end();
      return;
    }

    response.writeHead(206, {
      "Content-Type": type,
      "Content-Length": end - start + 1,
      "Content-Range": `bytes ${start}-${end}/${stat.size}`,
      "Accept-Ranges": "bytes",
      "Cache-Control": "no-store"
    });
    fs.createReadStream(filePath, { start, end }).pipe(response);
  });
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const pathname = decodeURIComponent(url.pathname);
  const target = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.normalize(path.join(root, target));

  if (!filePath.startsWith(root)) {
    send(response, 403, "Forbidden");
    return;
  }

  streamFile(request, response, filePath, types[path.extname(filePath).toLowerCase()] || "application/octet-stream");
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Playlist disponible en http://127.0.0.1:${port}`);
});
