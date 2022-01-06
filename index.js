const express = require("express");
// const { countAllRequests } = require("./monitoring");
const PORT = process.env.PORT || "8080";
const app = express();
// app.use(countAllRequests());

app.get("/", (req, res) => {
  res.send("Hello, for the j.cole picture please go to /jcole");
});

app.get("/jcole", (req, res) => {
  res.sendFile('./public/jcole.jpg', {root: './'});
});

app.listen(parseInt(PORT, 10), () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});