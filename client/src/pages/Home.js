import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_STORIES, QUERY_ME_BASIC } from '../utils/queries';
import Auth from '../utils/auth';
import StoryForm from '../components/StoryForm';
import StoryList from '../components/StoryList';
import LandingPage from '../components/LandingPage';

const Home = () => {
  const loggedIn = Auth.loggedIn();

  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_STORIES);
 
  const { data: userData } = useQuery(QUERY_ME_BASIC);

  const stories = data?.stories || [];
  console.log(stories)

  return (
    <container>
        <div>
          <LandingPage />
        </div>
        <div className="flex-column justify-space-between body-card m-12 p-4">
        {loggedIn && (
          <div className="col-12 mb-3">
            <StoryForm />
          </div>
        )}
        <div className={`col-10 mb-3 p-2 m-5 body-text ${loggedIn && 'col-lg-8'}`} >
          {loading ? (
            <div className="body-title">Loading...</div>
          ) : (
            <StoryList stories={stories} title="Check out these fitness stories"  />
          )}
        </div>
        </div>
    </container>
  );
};

export default Home;