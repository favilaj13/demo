const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo desde OpenShift222 🚀\n');
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});

