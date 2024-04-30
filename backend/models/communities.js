import mongoose from "mongoose";

const commmunitiesSchema = new mongoose.Schema(
  {
    groupName: String,
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    admin: mongoose.Types.ObjectId,
  },
  { timestamps: true }
);

const Commmunities = mongoose.model("Commmunities", commmunitiesSchema);

export default Commmunities;
