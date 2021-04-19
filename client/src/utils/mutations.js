import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const ADD_STORY = gql`
  mutation addStory($storyText: String!) {
    addStory(storyText: $storyText) {
      _id
      storyText
      createdAt
      username
      reactionCount
      reactions {
        _id
      }
    }
  }
`;

export const ADD_REACTION = gql`
  mutation addReaction($storyId: ID!, $reactionBody: String!) {
    addReaction(storyId: $storyId, reactionBody: $reactionBody) {
      _id
      reactionCount
      reactions {
        _id
        reactionBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_ACTIVITY = gql`
  mutation addActivity( $weekday: String!, $activityName: String!) {
    addActivity( weekday: $weekday, activityName: $activityName) {
      _id
      weekday
      activityName
      createdAt
    }
  }
`;

export const ADD_GOAL = gql`
  mutation addGoal( $goal: String!, $goalName: String!) {
    addGoal( goal: $goal, goalName: $goalName) {
      _id
      goal
      goalName
      createdAt
    }
  }
`;