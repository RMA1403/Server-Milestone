const Tips = require("../models/Tips");

async function getTips(req, res) {
  try {
    const tips = await Tips.find();
    res.status(200).json({ tips });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong" });
  }
}

async function createTips(req, res) {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      res.status(400).jsong({ msg: "Missing title or content" });
    }

    const tips = await Tips.create({ title, content });
    res.status(201).json({ tips });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong" });
  }
}

module.exports = { getTips, createTips };
