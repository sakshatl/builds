import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;