var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Raspberry Pi GPIO Simple-GUI" });
});

module.exports = router;
