import gql from 'graphql-tag';
export const QUERY_STORIES = gql`
  query stories($username: String) {
    stories(username: $username) {
      _id
      storyText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;
export const QUERY_STORY = gql`
  query story($id: ID!) {
    story(_id: $id) {
      _id
      storyText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
      stories {
        _id
        storyText
        createdAt
        reactionCount
      }
    }
  }
`;
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      stories {
        _id
        storyText
        createdAt
        reactionCount
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
      friends {
        _id
        username
      }
      activities{
        _id
        weekday
        activityName
      }
      goals{
        _id
        goal
        goalName
      }
    }
  }
`;
export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;
export const QUERY_ACTIVITIES = gql`
  query activities($username: String) {
    activities(username: $username) {
      _id
      weekday
      activityName
    }
  }
`;
export const QUERY_GOALS = gql`
  query goals($username: String) {
    goals(username: $username) {
      _id
      goal
      goalName
    }
  }
`;