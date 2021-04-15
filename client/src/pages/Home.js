import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_STORIES, QUERY_ME_BASIC } from '../utils/queries';
import Auth from '../utils/auth';
// import FriendList from '../components/FriendList';
import StoryForm from '../components/StoryForm';
import StoryList from '../components/StoryList';
import LandingPage from '../components/LandingPage';
import Header from '../components/Header';




const Home = () => {
  const loggedIn = Auth.loggedIn();

  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_STORIES);
  //f data exists, store it in the stories constant we just created. If data is undefined, then save an empty array to the stories component.

  // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery(QUERY_ME_BASIC);

  const stories = data?.stories || [];
  console.log(stories)

  return (
    <container>
      <div className="landingPg">
          <LandingPage />
        </div>
    <main>
      <div className="flex-row justify-space-between body-card m-3 p-4">
      {loggedIn && (
        <div className="col-12 mb-3">
          <StoryForm />
        </div>
      )}
      <div className={`col-12 mb-3 p-3 m-3 body-text ${loggedIn && 'col-lg-8'}`} >
        {loading ? (
          <div className="body-title">Loading...</div>
        ) : (
          <StoryList stories={stories} title="Check out these fitness stories"  />
        )}
      </div>
      {/* {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-4" >
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null} */}
      </div>
    </main>
    </container>
  );
};

export default Home;