const mongoose = require("mongoose");

const PantrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
  },
  itemType: {
    type: String,
  },
  purchaseTime: {
    type: Date,
  },
  expiryDate: {
    type: Date,
  },
  storage: {
    type: String,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Pantry", PantrySchema);
