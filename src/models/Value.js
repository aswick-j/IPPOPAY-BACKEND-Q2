import mongoose from "mongoose";

const valueSchema = new mongoose.Schema({
  values: [
    {
      type: String,
    },
  ],
  answers: {
    type: Number,
  },
});

const Value = mongoose.model("Value", valueSchema);

export default Value;
