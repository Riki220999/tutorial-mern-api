import mongoose from 'mongoose';

const UserModel = mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
});

export default mongoose.model('UserModel', UserModel);
