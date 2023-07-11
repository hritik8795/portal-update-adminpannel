const mongoose = require("mongoose");
dbConnect();
async function dbConnect() {
  try {
    await mongoose.connect(
      "mongodb+srv://hritikshukla44:jK1E1Lcva73fop5p@cluster0.mleflsv.mongodb.net/",
      { useNewUrlParser: true }
    );
    console.log("Mongo DB Connection success");
  } catch (error) {
    console.log("Mongo DB Connection failed");
  }
}

module.exports = mongoose;

// VCCFF1Yfytp0yvbL;
