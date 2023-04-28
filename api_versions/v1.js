const express = require("express");
const router = express.Router();

// Cron Reports
const midnight_cron = require('../jobs/midnight_cron');


const onboarding = require('../routes/onboarding')


//Firebase onboardings
router.use('/onboarding', onboarding)

// Scheduled Jobs
router.use('/cron', midnight_cron)

module.exports = router;
