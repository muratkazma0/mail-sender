const nodemailer = require('nodemailer');
require('dotenv').config();
const path = require('path');

async function sendMail(receiverEmail, companyName) {
  try {
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "✓ true" : "✗ false");

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"Sender Name" <${process.env.EMAIL_USER}>`,
      to: receiverEmail,
      subject: 'Internship Application',
      html: `
        <p>Dear ${companyName} Representative,</p>
        <p>Please find attached my CV for your consideration regarding internship opportunities.</p>
        <p>I look forward to hearing from you.</p>
        <br/>
        <p>Best regards,</p>
        <p>Applicant</p>
        
      `,
      attachments: [
        {
          filename: 'Applicant-CV.pdf',
          path: path.join(__dirname, '../Applicant-CV.pdf'),
          contentType: 'application/pdf'
        }
      ]
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${companyName} (${receiverEmail}) - ${info.response}`);
  } catch (error) {
    console.error(`Email sending error: ${companyName} (${receiverEmail}) -`, error.message);
  }
}

module.exports = sendMail;
