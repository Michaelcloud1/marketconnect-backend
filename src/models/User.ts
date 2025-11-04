import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    role: { type: String, enum: ['business', 'marketer'], required: true },
    name: { type: String, required: true },
    companyName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    profileImageUrl: { type: String }
  },
  { 
    timestamps: true,
    toJSON: {
      transform: (_doc, ret) => {
        delete ret.password;
        return ret;
      }
    }
  }
);

// Add index for email lookups
UserSchema.index({ email: 1 });

export default mongoose.model('User', UserSchema);
