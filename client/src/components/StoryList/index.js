import React from 'react';
import { Link } from 'react-router-dom';


const StoryList = ({ stories, title }) => {
  if (!stories.length) {
    return <h3>No Stories Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {stories &&
        stories.map(story => (
          <div key={story._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${story.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {story.username}
              </Link>{' '}
              story on {story.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/thought/${story._id}`}>
                <p>{story.storyText}</p>
                <p className="mb-0">
                  Reactions: {story.reactionCount} || Click to{' '}
                  {story.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default StoryList;