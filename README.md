## Automated Email Sending Project

This project is developed to automatically send emails to companies using Node.js and Nodemailer. It provides bulk email sending with specified content and attachments to companies listed in `.json` format.

## Features

- Bulk email sending to companies
- Customized email content in HTML format
- PDF file attachment (resume, portfolio, etc.)
- Protection of sensitive information with `.env`

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/muratkazma0/mail-sender.git
cd mail-sender
```

### Install Required Packages

```bash
npm install
```

### Create .env File

```env
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
```

## Usage

### Define Companies

Write the name and email address of the companies to which you want to send emails in the `companies.json` file in the main directory.

```json
[
  {
    "name": "Microsoft",
    "email": "careers@microsoft.com"
  },
  {
    "name": "Huawei",
    "email": "hr@huawei.com"
  }
]
```

### Update Mail Content

Customize the `subject`, `html`, and `attachments` fields in the `sendMail.js` file according to your needs.

### Start Sending

```bash
node app.js
```

