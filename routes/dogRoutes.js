const express = require("express");
const router = express.Router();
const dogController = require("../controllers/dogController");

router.get("/new", dogController.showNew);
router.post("/", (req, res) => console.log(req.body));

module.exports = router;
