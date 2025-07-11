import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {

    try{
       await mongoose.connect(process.env.MONGO_URI);
     console.log("MONGODB CONNECTED SUCCESSFULLY");
    } catch (error) {
      console.log("Error in connecting ",error);
      process.exit(1); // exist when failure
    }


}