import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema(
  {
    name: String,
    groupName: [{ type: String, ref: "Communities" }],
    admin: {
      type: String,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Events = mongoose.model("Events", eventsSchema);

export default Events;
