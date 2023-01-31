const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("working server on 4000");
});

app.listen(4000, () => {
  console.log(`Server is Listening on 4000`);
});
