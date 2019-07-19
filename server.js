const express = require("express");

const app = express();
const dogRoutes = require("./routes/dogRoutes");

require("./db/db");

app.use(express.json());
app.use(express.urlencoded());
app.use("/dogs", dogRoutes);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
