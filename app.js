const express = require("express");
const cors = require("cors");

const app = express();
const contactsRouter = require("./app/routes/contact.routes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contactbook application." });
});

app.use("/api/contacts", contactsRouter);

module.exports = app;
