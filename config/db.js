const mongoose = require("mongoose");
const colors = require("colors");
const MONGO_URL='mongodb://localhost:27017/hospital1';
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
