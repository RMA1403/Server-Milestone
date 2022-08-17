const router = require("express").Router();
const { addPantry } = require("../controllers/pantry");

router.route("/:username").post(addPantry);

module.exports = router;
