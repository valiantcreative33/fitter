import React, {useState} from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_STORIES, QUERY_ME_BASIC } from '../utils/queries';
import Auth from '../utils/auth';
import FriendList from '../components/FriendList';
import StoryForm from '../components/StoryForm';
import StoryList from '../components/StoryList';
import { ADD_ACTIVITY } from '../utils/mutations';
import '../Profile.css';


const Profile = () => {
  const loggedIn = Auth.loggedIn();
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_STORIES);
  //f data exists, store it in the stories constant we just created. If data is undefined, then save an empty array to the stories component.
  // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const stories = data?.stories || [];
 
  const [addActivity, { error }] = useMutation(ADD_ACTIVITY)
    const [weekday, setWeekday] = useState('');
    const [activityName, setActivityName] = useState('');
    const handleChange = (event, dow) => {
      console.log(event.target.value);
      setWeekday(dow);
      setActivityName(event.target.value)
    };
    const handleClick = async event => {
        event.preventDefault();
        try {
            // add reaction to database
            await addActivity({
                variables: { weekday, activityName }
            });
        
            // clear form value 
            setWeekday('');
            setActivityName('');
        } catch (e) {
                console.error(e);
        }
       
    };
  return (
    <main className="body-card m-1 pb-1">
       <div className="container mt-5 m-4">

        <div className="m-2 p-2 mb-5 col-10 border-bottom">
        <h3 className="calendar-title text-center"> Your Goals</h3>
        <div className="calendar-input text-center">goals here!</div>
        </div>

        <h3 className="calendar-title"> Your weekly calendar</h3>
        <div className="row p-2">
          <div className="col-8 m-1 day">
            Sunday:
          </div>
            <textarea  onChange={(event) => handleChange(event, "Sunday")} className="col-10 calendar-input">
            </textarea>
              <button className="btn saveBtn col-md-1"><i className="fas fa-save"></i></button>
        </div>
    
        <div className="row p-2">
          <div className="col-8 m-1 day">
            Monday:
          </div>
            <textarea onChange={(event) => handleChange(event, "Monday")} className="col-10 calendar-input">
            </textarea>
              <button className="btn saveBtn col-md-1"><i className="fas fa-save"></i></button>
        </div>
        
        <div className="row p-2">
          <div className="col-8 m-1 day">
            Tuesday:
          </div>
            <textarea onChange={(event) => handleChange(event, "Tuesday")} className="col-10 calendar-input">
            </textarea>
              <button className="btn saveBtn col-md-1"><i className="fas fa-save"></i></button>
        </div>

        <div className="row p-2">
          <div className="col-8 m-1 day">
            Wednesday:
          </div>
            <textarea onChange={(event) => handleChange(event, "Wednesday")} className="col-10 calendar-input">
            </textarea>
              <button className="btn saveBtn col-md-1"><i className="fas fa-save"></i></button>
        </div>
        
        <div className="row p-2">
          <div className="col-8 m-1 day">
            Thursday:
          </div>
            <textarea onChange={(event) => handleChange(event, "Thursday")} className="col-10 calendar-input">
            </textarea>
              <button className="btn saveBtn col-md-1"><i className="fas fa-save"></i></button>
        </div>
        
        <div className="row p-2">
          <div className="col-8 m-1 day">
            Friday:
          </div>
            <textarea onChange={(event) => handleChange(event, "Friday")} className="col-10 calendar-input">
            </textarea>
              <button className="btn saveBtn col-md-1"><i className="fas fa-save"></i></button>
        </div>
      
        <div className="row p-2">
          <div className=" col-8 m-1 day">
            Saturday:
          </div>
            <textarea onChange={(event) => handleChange(event, "Saturday")} className="col-10 calendar-input">
            </textarea>
              <button className="btn saveBtn col-md-1"><i className="fas fa-save"></i></button>
        </div>
      </div>
      
  </main>
  );
};
export default Profile;