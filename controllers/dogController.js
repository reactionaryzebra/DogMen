const Dogs = require("../model/Dogs");
const mongoose = require("mongoose");

const dogController = {
  showNew: (req, res) => {
    res.render("new.ejs");
  },
  create: (req, res) => {
    if (req.body.isFixed === "on") {
      req.body.isFixed = true;
    } else {
      req.body.isFixed = false;
    }
    if (req.body.isGood === "on") {
      req.body.isGood = true;
    } else {
      req.body.isGood = false;
    }
    Dogs.create(
      {
        name: req.body.name,
        paws: req.body.paws,
        color: req.body.color,
        breed: req.body.breed,
        isFixed: req.body.isFixed,
        isGood: req.body.isGood,
        favoriteToys: req.body.favoriteToys.split(", ")
      },
      (err, createdDog) => {
        err ? console.log(err) : console.log(createdDog);
      }
    );
  }
};

module.exports = dogController;
