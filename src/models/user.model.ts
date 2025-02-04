import mongoose from "mongoose";

//shema в Mongoose — это определение структуры документа, который будет храниться в коллекции MongoDB. 
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["student", "teacher"], required: true },
});

const User = mongoose.model("User", userSchema);

export default User;