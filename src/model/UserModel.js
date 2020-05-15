const mongoose = require('../config/database');

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String, required: true },
  password_hash: { type: String, required: true },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  birthdate: { type: Date, required: true },
  avatar_id: { type: String, require: false },
});

module.exports = mongoose.model('User', UserSchema);
