const readCompanies = require("./utils/readCompanies");
const sendMail = require("./utils/sendMail");

async function main() {
  const companies = readCompanies();

  for (const company of companies) {
    await sendMail(company.email);
  }
}

main();
