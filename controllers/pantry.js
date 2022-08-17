const Pantry = require("../models/Pantry");
const User = require("../models/User");

async function addPantry(req, res) {
  try {
    if (!req.body.name) {
      return res.status(400).json({ msg: "Pantry name is required" });
    }

    const { username } = req.params;
    const user = await User.findOne({ username });
    const pantry = await Pantry.create({
      ...req.body,
      user: user._id,
    });

    user.pantries.push(pantry._id);
    user.save();
    res.status(201).json({ pantry, user });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong" });
  }
}

module.exports = { addPantry };
