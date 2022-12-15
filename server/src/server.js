const http = require("http");
const app = require("./app");

const { loadPlanets } = require("./models/planets.model");
const port = 8000;

const server = http.createServer(app);

async function startServer() {
  await loadPlanets();
  server.listen(port, () => {
    console.log(`Done at port ${port}`);
  });
}

startServer();
