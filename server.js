'use strict';

const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const projectRoot = __dirname;
const staticFiles = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/app.js', ['app.js', 'text/javascript; charset=utf-8']],
  ['/styles.css', ['styles.css', 'text/css; charset=utf-8']]
]);
function createServer() {
  return http.createServer((request, response) => {
    const pathname = new URL(request.url, 'http://localhost').pathname;
    if (request.method === 'GET' && staticFiles.has(pathname)) {
      const [filename, contentType] = staticFiles.get(pathname);
      const filePath = path.join(projectRoot, filename);
      response.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff'
      });
      return fs.createReadStream(filePath).pipe(response);
    }
    response.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
    return response.end(JSON.stringify({ error: 'No encontrado.' }));
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT || 3000);
  const host = process.env.HOST || '127.0.0.1';
  const server = createServer();
  server.listen(port, host, () => {
    console.log(`Diente Feliz disponible en http://${host}:${port}`);
  });
}

module.exports = { createServer };
