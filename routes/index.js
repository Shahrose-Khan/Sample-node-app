const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

// Welcome Page
router.get("/", forwardAuthenticated, (req, res) =>
  res.render("welcome", { layout: "layouts/layout" })
);

// Dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", {
    user: req.user,
    layout: "layouts/layout"
  })
);

module.exports = router;
