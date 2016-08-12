const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: String,
  gender: String
});

// the collection's name is `students`
const Student = mongoose.model('Student', studentSchema);

export {Student};