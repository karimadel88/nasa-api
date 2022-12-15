const { getAllPlantes } = require("../../models/planets.model");

// Return Function here used to make sure stoped at the end of the function
function httpGetAllPlantes(req, res) {
  return res.status(200).json(getAllPlantes());
}

module.exports = {
  httpGetAllPlantes,
};
