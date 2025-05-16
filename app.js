const fs = require('fs');
const sendMail = require('./utils/sendMail.js');

async function main() {
  const data = fs.readFileSync('companies.json', 'utf8');
  const companies = JSON.parse(data);

  for (const company of companies) {
    await sendMail(company.email, company.name); 
  }
}

main();
