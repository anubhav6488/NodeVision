const authenticator = require("../middleware/authenticator");
const controller = require("../controllers/onboarding");
const express = require("express");
const router = express.Router();
// const sanitizer = require("../sanitizers/onboarding");
// const validator = require("../validators/onboarding");
  router.post(
    "/signup",
    // authenticator.authenticator,
    controller.post_idpass
  );
  router.get(
    "/verify",
    // authenticator.authenticator,
    controller.read_all_idpass
  );
  

module.exports = router;
