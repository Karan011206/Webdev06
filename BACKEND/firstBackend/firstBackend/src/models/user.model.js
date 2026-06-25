import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    FullName: {
      type: String,
      required: true,
    },

    Email: {
      type: String,
      required: true,
      unique: true,
    },

    PhoneNumber: {
      type: Number,
      required: true,
    },

    Gender: {
      type: String,
      required: true,
    },

    Photo: {
      url: {
        type: String,
      },
      publicId: {
        type: String,
      },
    },

    Password: {
      type: String,
      required: true,
    },

    Date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;