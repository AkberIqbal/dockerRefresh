const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!... let's run it on docker, iA");
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
