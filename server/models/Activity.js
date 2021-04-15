const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const activitySchema = new Schema(
  {
    weekday: {
      type: String,
      required: true,
      maxlength: 9
    },
    activityName: {
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



module.exports = activitySchema;