const sendMail = require('./utils/sendMail'); 
const companies = require('./companies.json'); 

async function sendToCompanies() {
  for (const company of companies) {
    await sendMail(company.email, company.name); 
  }
}

if (require.main === module) {
  sendToCompanies();
}

module.exports = sendToCompanies;
