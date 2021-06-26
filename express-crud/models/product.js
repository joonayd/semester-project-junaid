var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  teamA: String,
  teamB: String,
  date: String,
  city: String,
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
