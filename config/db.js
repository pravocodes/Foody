import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://CoffeeCoders:2125Coffeecoders@cluster0.8fidwls.mongodb.net/Foodiee"
    );
    console.log(`Connected successfully to mongodb `.bgGreen.white);
  } catch (error) {
    console.log(`Error Connecting to MongoDb ${error}`.bgRed.white);
  }
};

export default connectDB;
