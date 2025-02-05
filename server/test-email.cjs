require("dotenv").config(); // Load environment variables
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // Your email from .env
    pass: process.env.PASSWORD, // Your email app password from .env
  },
});

const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL, // Your receiving email address
  subject: "Test Email",
  text: "This is a test email from the test-email.cjs script!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error sending email:", error);
  } else {
    console.log("Email sent successfully:", info.response);
  }
});
