const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "..")));

app.post("/send-message", async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "sokolvak_ak24@nuwm.edu.ua",
            pass: "jjsl eadb pbze jgpd"
        }
    });

    const mailOptions = {
    from: "sokolvak_ak24@nuwm.edu.ua",        
    to: "sokolvak_ak24@nuwm.edu.ua",
    subject: `Нове повідомлення від ${name}`,
    text: `${message}\n\nEmail користувача: ${email}`,
    replyTo: email
};

    try {
        await transporter.sendMail(mailOptions);
        return res.json({ success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(3000, () => console.log("Сервер працює на http://localhost:3000"));