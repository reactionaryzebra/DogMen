const mongoose = require("mongoose");

const connectionString = "mongodb://localhost/menLab";

mongoose.connect(
  connectionString,
  { useNewUrlParser: true, useCreateIndex: true }
);

mongoose.connection.on("connected", () => {
  console.log("You are connected to Mongo, congratulations!");
});

mongoose.connection.on("disconnected", () => {
  console.log("You disconnected, you fool");
});

mongoose.connection.on("error", err => {
  console.log(err);
});
