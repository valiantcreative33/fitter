import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_STORY } from '../utils/queries';
import ReactionList from '../components/ReactionList';
import Auth from '../utils/auth';
import ReactionForm from '../components/ReactionForm'



const SingleStory = props => {

  const { id: storyId } = useParams();
  const { loading, data } = useQuery(QUERY_STORY, {
    variables: { id: storyId }
  });
  
  const story = data?.story || {};
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-4 p-2">
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {story.username}
          </span>{' '}
          story on {story.createdAt}
        </p>
        <div className="card-body">
          <p>{story.storyText}</p>
        </div>
      </div>

      {story.reactionCount > 0 && <ReactionList reactions={story.reactions} />}
      {Auth.loggedIn() && <ReactionForm storyId={story._id} />}

    </div>
  );
};

export default SingleStory;
