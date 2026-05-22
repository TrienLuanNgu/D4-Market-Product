import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';

const port = Number(process.env.PORT || 5174);
const host = '127.0.0.1';
const root = resolve('dist/d4-dolly-zoom/browser');

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
};

function resolveRequestPath(url = '/') {
  const pathname = decodeURIComponent(new URL(url, `http://${host}:${port}`).pathname);
  const requested = normalize(pathname).replace(/^(\.\.[/\\])+/, '');
  const target = resolve(join(root, requested));

  if (!target.startsWith(root)) {
    return join(root, 'index.html');
  }

  if (existsSync(target) && statSync(target).isFile()) {
    return target;
  }

  return join(root, 'index.html');
}

createServer((request, response) => {
  const filePath = resolveRequestPath(request.url);
  const type = contentTypes[extname(filePath)] || 'application/octet-stream';

  response.writeHead(200, { 'Content-Type': type });
  createReadStream(filePath).pipe(response);
}).listen(port, host, () => {
  console.log(`DollySync preview: http://${host}:${port}/`);
});
