const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  paws: { type: Number, default: 4 },
  color: String,
  isFixed: Boolean,
  breed: String,
  isGood: Boolean,
  favoriteToys: [String]
});

const Dogs = mongoose.model("Dog", dogSchema);

module.exports = Dogs;
