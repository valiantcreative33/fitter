const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const storySchema = new Schema(
  {
    storyText: {
      type: String,
      required: 'You need to leave a story!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

storySchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Story = model('Story', storySchema);

module.exports = Story;
