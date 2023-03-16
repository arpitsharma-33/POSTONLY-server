const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://Arpit:ArpitEnjoyingSharma332003@cluster0.bhlcvl6.mongodb.net/?retryWrites=true&w=majority";
  try {
      const connect = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected : ${connect.connection.host}`);

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
