const User = require("../models/User");

async function getUser(req, res) {
  try {
    const { username, password } = req.query;
    const user = await User.findOne({ username }).populate("pantries");
    if (!user) {
      return res.status(404).json({ msg: "Username does not exist" });
    }

    if (user.password !== password) {
      return res.status(400).json({ msg: "Incorrect password" });
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong" });
  }
}

async function addUser(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ msg: "Missing username or password" });
    }

    const checkUser = await User.find({ username });
    if (!(checkUser.length === 0)) {
      return res.status(400).json({ msg: "Username already exist" });
    }

    const user = await User.create({
      username,
      password,
      pantries: [],
    });
    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong" });
  }
}

module.exports = { getUser, addUser };
