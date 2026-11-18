'use strict';

const assert = require('node:assert/strict');
const { afterEach, test } = require('node:test');
const { createServer } = require('../server');

const runningServers = [];

async function startServer() {
  const server = createServer();
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  runningServers.push(server);
  return `http://127.0.0.1:${server.address().port}`;
}

afterEach(async () => {
  await Promise.all(runningServers.splice(0).map(server => new Promise((resolve, reject) => {
    server.close(error => error ? reject(error) : resolve());
  })));
});

test('serves the application files', async () => {
  const baseUrl = await startServer();

  const page = await fetch(`${baseUrl}/`);
  assert.equal(page.status, 200);
  assert.match(page.headers.get('content-type'), /^text\/html/);

  const script = await fetch(`${baseUrl}/app.js`);
  assert.equal(script.status, 200);
  assert.match(script.headers.get('content-type'), /^text\/javascript/);
});

test('returns not found for unknown routes', async () => {
  const baseUrl = await startServer();
  const response = await fetch(`${baseUrl}/api/unknown`);

  assert.equal(response.status, 404);
  assert.deepEqual(await response.json(), { error: 'No encontrado.' });
});
