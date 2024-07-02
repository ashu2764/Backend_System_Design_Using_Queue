import mongoose, { Schema } from "mongoose";

const requestSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: { type: String, default: "pending" },
});


export const Request = mongoose.model("Request", requestSchema)