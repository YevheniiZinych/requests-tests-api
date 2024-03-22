const express = require("express");

const getAllRequest = require("../../controllers/requests");
const countRequest = require("../../middlewars/countRequest");

const router = express.Router();

router.post("/", countRequest, getAllRequest);

module.exports = router;
