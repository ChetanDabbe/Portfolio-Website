const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const fileSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  fileData: Buffer,
});
const File = mongoose.model("File", fileSchema);

app.get("/download", async (req, res) => {
  try {
    const file = await File.findOne({ filename: "Chetan_resume.pdf" });

    if (!file) {
      return res.status(404).json({ error: "Resume file not found" });
    }

    res.set({
      "Content-Type": "application/pdf", // Ensure correct content type for PDF files
      "Content-Disposition": `attachment; filename="${file.filename}"`,
    });
    res.send(file.fileData);
  } catch (error) {
    console.error("Error downloading resume:", error);
    res.status(500).send("Server error");
  }
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.email,
        pass: process.env.appPass,
      },
    });

    // Email options
    let mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.email,
      subject: "Message from portfolio website",
      text: message
        ? `Message from ${name} (${email}): ${message}`
        : `Message from ${name} (${email})`,
    };

    // Send mail
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
