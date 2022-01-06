const express = require("express");
// const { countAllRequests } = require("./monitoring");
const PORT = process.env.PORT || "8080";
const app = express();
// app.use(countAllRequests());

app.get("/", (req, res) => {
  res.send("Hi Amit! Please add /amit at the end of the URL for a suprise");
});

app.get("/amit", (req, res) => {
  res.sendFile('./public/amit.jpeg', {root: './'});
});

app.listen(parseInt(PORT, 10), () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});