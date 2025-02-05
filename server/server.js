import dotenv from 'dotenv'; 
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 4321;

// Middleware
app.use(express.json()); // Parse JSON data
app.use(cors()); // Allow frontend requests

// Root route (for testing GET requests)
app.get('/', (req, res) => {
  res.send('Hello, this is your server!');
});

// Email sending route
app.post("/send", async (req, res) => {
  // Log to check if the route is being hit
  console.log("POST request received on /send");

  const { name, email, message } = req.body;

  // Debugging: Log the request data
  console.log('Received data:', req.body);

  // Validate input data
  if (!name || !email || !message) {
    console.log("Missing required fields");
    return res.status(400).json({
      success: false,
      message: 'All fields (name, email, message) are required.'
    });
  }

  // Configure transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // Your email (from .env file)
      pass: process.env.PASSWORD, // Your email app password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL, // Your receiving email
    subject: `New Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  // Debugging: Log mail options
  console.log('Mail options:', mailOptions);

  try {
    // Send email
    await transporter.sendMail(mailOptions);

    // Debugging: Log successful email sending
    console.log('Email sent successfully to:', process.env.EMAIL);

    // Respond with success
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    // Debugging: Log error details
    console.error("Error sending email:", error);

    // Respond with error message
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
