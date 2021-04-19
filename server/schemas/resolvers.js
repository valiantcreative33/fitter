const { User, Story } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        stories: async (parent, {username}) => {
            const params = username ? { username } : {};
            return Story.find(params).sort({ createdAt: -1 });
        },

        //get a story by id
        story: async (parent, { _id }) => {
            return Story.findOne({ _id });
        },

        me: async (parent, args, context) => { 
            if(context.user) {
                const userData = await User.findOne({ _id: context.user._id })
              .select('-__v -password')
              .populate('stories')
              .populate('friends');
        
            return userData;
            }
            throw new AuthenticationError('Not logged in');

        },

        // get all users
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('friends')
            .populate('stories');
        },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('friends')
            .populate('stories');
        }

    },

    Mutation: {
        addUser: async (parent, args) =>{
            const user = await User.create(args);
            const token = signToken(user)
            return {token, user};
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const token = signToken(user);
            return { token, user };
          },

          addStory: async (parent, args, context) => {
            if (context.user) {
              const story = await Story.create({ ...args, username: context.user.username });
          
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { stories: story._id } },
                { new: true }
              );
          
              return story;
            }
          
            throw new AuthenticationError('You need to be logged in!');
          },

          addReaction: async (parent, { storyId, reactionBody }, context) => {
            if (context.user) {
              const updatedStory = await Story.findOneAndUpdate(
                { _id: storyId },
                { $push: { reactions: { reactionBody, username: context.user.username } } },
                { new: true, runValidators: true }
              );
          
              return updatedStory;
            }
          
            throw new AuthenticationError('You need to be logged in!');
          },

          addFriend: async (parent, { friendId }, context) => {
            if (context.user) {
              const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { friends: friendId } },
                { new: true }
              ).populate('friends');
          
              return updatedUser;
            }
          
            throw new AuthenticationError('You need to be logged in!');
          },

          addActivity: async (parent, { activityId, weekday, activityName }, context) => {
            if (context.user) {
              const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { activities: {activityId, weekday, activityName} } },
                { new: true }
              ).populate('activities');
          
              return updatedUser;
            }
          
            throw new AuthenticationError('You need to be logged in!');
          },

          addGoal: async (parent, { goalId, goal, goalName }, context) => {
            if (context.user) {
              const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { goals: {goalId, goal, goalName} } },
                { new: true }
              ).populate('goals');
          
              return updatedUser;
            }
          
            throw new AuthenticationError('You need to be logged in!');
          }
    }
};
  
module.exports = resolvers;