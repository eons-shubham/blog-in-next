const mongoose = require("./db");

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  title: String,
  content: String,
});

const DataModel = mongoose.model("Data", dataSchema);

module.exports = DataModel;
