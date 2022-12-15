const launches = new Map();
let latestFlightNymber = 100;

// Function To Check item exist or not by id
function existLaunchWithId(launcId) {
  return launches.has(launcId);
}

// Function To Get All Launches (GET)
function getAllLaunches() {
  return Array.from(launches.values());
}

// Function To Add New Launch (POST)
function addNewLaunch(launch) {
  latestFlightNymber++;
  launches.set(
    latestFlightNymber,
    Object.assign(launch, {
      flightNumber: latestFlightNymber,
      upcoming: true,
      success: true,
      customers: ["Av1", "Av2", "Av3"],
    })
  );
}

// Function To Delete request (DELETE)
function abortLaunchById(launchId) {
  const aborted = launches.get(launchId);
  // To update uncoming to false
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports = {
  existLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  abortLaunchById,
};
