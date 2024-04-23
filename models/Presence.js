const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define the Session schema
const sessionSchema = new Schema({
  numberSeance: {
    type: Number,
    required: true
  },
  students: [{
    etudiant: {
      type: Schema.Types.ObjectId,
      ref: 'Etudiant'
    },
    present: {
      type: Boolean,
      default: false
    }
  }]
});

// Define the Presence schema
const presenceSchema = new Schema({
  moduleId: {
    type: Schema.Types.ObjectId,
    ref: 'Module',
    required: true
  },
  sessions: [sessionSchema]
});

// Create the Presence model
const Presence = mongoose.model('Presence', presenceSchema);

module.exports = Presence;
