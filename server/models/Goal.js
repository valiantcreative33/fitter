const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const goalSchema = new Schema(
  {
    goal: {
      type: String,
      required: true,
      maxlength: 250
    },
    goalName: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);



module.exports = goalSchema;