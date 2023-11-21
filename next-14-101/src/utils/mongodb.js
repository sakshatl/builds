import mongoose from "mongoose"

export const connectMongoDB = async () => {
  const uri = "MONGODB_URI";
  try {
    if(mongoose.connection.readyState === 0) {
      await mongoose.connect(uri);
      console.log('Connected to MongoDB');
    }
  } catch (err) {
    console.log('Error connecting to MongoDB');
  }
}