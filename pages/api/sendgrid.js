const nodemailer = require("nodemailer"); // Require the Nodemailer package
async function sendEmail(req, res) {
  // SMTP config
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu", //
    port: 587,
    auth: {
      user: "contact@streato.com", // Your Ethereal Email address
      pass: "Streato4723!", // Your Ethereal Email password
    },
  }); // Send the email
  try {
    let info = await transporter.sendMail({
      from: '"James Swanson" <contact@streato.com>',
      to: "admin@synost.net", // Test email address
      subject: "I love SMTPOP!",
      text: "Here's a text version of the email.",
      html: "Here's an <strong>HTML version</strong> of the email.",
    });
  }
  catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
 }

return res.status(200).json({ error: "" });
}

export default sendEmail;
