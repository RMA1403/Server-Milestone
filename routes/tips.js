const router = require("express").Router();
const { getTips, createTips } = require("../controllers/tips");

router.route("/").get(getTips).post(createTips);

module.exports = router;
