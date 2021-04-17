"use strict";
const nodemailer = require("nodemailer");
require('.dotenv').config();

async function main() {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: '"Medication reminder" <noreply.medication.reminder@gmail.com>',
    to: "joe.d.malone@gmail.com, pyrat32@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });
}

main().catch(console.error);