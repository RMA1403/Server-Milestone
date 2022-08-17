const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(require("cors")());
app.use(express.json());

app.use("/api/v1/user", require("./routes/user"));
app.use("/api/v1/pantry", require("./routes/pantry"));
app.use("/api/v1/tips", require("./routes/tips"));

const port = process.env.PORT || 5000;

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://test_user:test_user123@test-cluster.styaf4q.mongodb.net/milestone?retryWrites=true&w=majority"
    );
    app.listen(port, console.log(`Listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
}
start();
