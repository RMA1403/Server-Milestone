const router = require("express").Router();
const { getUser, addUser } = require("../controllers/user");

router.route("/").get(getUser).post(addUser);

module.exports = router;
