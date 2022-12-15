const { parse } = require("csv-parse");
const fs = require("fs");
const path = require("path");

const planets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_prad"] > 0.36 &&
    planet["koi_srad"] > 1.11 &&
    planet["koi_steff"] > 1.6
  );
}

// Outer API to get all planetes
function loadPlanets() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, "..", "..", "data", "data.csv"))
      .pipe(parse({ comment: "#", columns: true }))
      .on("data", (data) => {
        if (isHabitablePlanet(data)) {
          planets.push(data);
        }
      })
      .on("err", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        resolve();
        // console.log(planets);
      });
  });
}

// GET
function getAllPlantes() {
  return planets;
}

module.exports = { loadPlanets, getAllPlantes };
