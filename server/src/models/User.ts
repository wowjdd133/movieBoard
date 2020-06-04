import mongoose from 'mongoose';
import moment from 'moment';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  password: {
    type:String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: true,
  },
  gender: String,
  create_at: {
    type: Date,
    default: moment(),
  }
})

export default mongoose.model('user', UserSchema);