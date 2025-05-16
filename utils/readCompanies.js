const fs = require("fs");
const path = require("path");

function readCompanies() {
  const filePath = path.join(__dirname, "../companies.json");
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
}

module.exports = readCompanies;
