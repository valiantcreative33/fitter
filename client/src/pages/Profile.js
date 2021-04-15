import React, {useState} from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_ACTIVITIES, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import FriendList from '../components/FriendList';
import StoryForm from '../components/StoryForm';
import StoryList from '../components/StoryList';
import { ADD_ACTIVITY } from '../utils/mutations';


const Profile = () => {
  const loggedIn = Auth.loggedIn();
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_ACTIVITIES);
  //f data exists, store it in the stories constant we just created. If data is undefined, then save an empty array to the stories component.
  // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery(QUERY_ME);
  const activities = userData?.me?.activities || [];//data?.activities || [];
  // const activities = [];
  // console.log(userData?.me?.activities);
 
  const [addActivity, { error }] = useMutation(ADD_ACTIVITY)
    const [weekday, setWeekday] = useState('');
    const [activityName, setActivityName] = useState('');
    const handleChange = (event, dow) => {
      console.log(event.target.value);
      setWeekday(dow);
      setActivityName(event.target.value)
    };

    const handleClick = async event => {
      console.log("addActivity");
      let weekday = event.target.getAttribute("data-weekday");
      let activityName = document.getElementById("textarea-" + weekday).value;
      console.log(activityName);
        event.preventDefault();
        try {
            // add reaction to database
            await addActivity({
                variables: { weekday, activityName }
            });
        
            // clear form value 
            setWeekday(weekday);
            setActivityName('');
        } catch (e) {
                console.error(e);
        }
       
    };
  return (
    <main>
       <div className="container">
      
 
  
  <div id="hour-11" className="row time-block">
    <div className="col-md-1 hour">
      Sunday
    </div>
      <textarea id="textarea-Sunday" onChange={(event) => handleChange(event, "Sunday")} className="col-md-10 text11">
      </textarea>
        <button onClick={(event)=>handleClick(event)} data-weekday="Sunday" className="btn saveBtn col-md-1"><i className="fas fa-save"></i></button>
  </div>
 
  <div id="hour-12" className="row time-block">
    <div className="col-md-1 hour">
      Monday
    </div>
      <textarea className="col-md-10 text12">
      </textarea>
        <button className="btn saveBtn col-md-1"><i className="fas fa-save"></i></button>
  </div>
  
  <div id="hour-1" className="row time-block">
    <div className="col-md-1 hour">
      Tuesday
    </div>
      <textarea className="col-md-10 text1">
      </textarea>
        <button className="btn saveBtn col-md-1"><i className="fas fa-save"></i></button>
  </div>
  <div id="hour-2" className="row time-block">
    <div className="col-md-1 hour">
      Wednesday
    </div>
      <textarea className="col-md-10 text2">
      </textarea>
        <button className="btn saveBtn col-md-1"><i className="fas fa-save"></i></button>
  </div>
  
  <div id="hour-3" className="row time-block">
    <div className="col-md-1 hour">
      Thursday
    </div>
      <textarea className="col-md-10 text3">
      </textarea>
        <button className="btn saveBtn col-md-1"><i className="fas fa-save"></i></button>
  </div>
  
  <div id="hour-4" className="row time-block">
    <div className="col-md-1 hour">
      Friday
    </div>
      <textarea className="col-md-10 text4">
      </textarea>
        <button className="btn saveBtn col-md-1"><i className="fas fa-save"></i></button>
  </div>
 
  <div id="hour-5" className="row time-block">
    <div className="col-md-1 hour">
      Saturday
    </div>
      <textarea className="col-md-10 text5">
      </textarea>
        <button className="btn saveBtn col-md-1"><i className="fas fa-save"></i></button>
  </div>

  <div>
      <h3 className="body-text" style={{color: 'black', fontSize: '26px', fontWeight: 'bold'}}>Activities</h3>
      {activities &&
        activities.map(activity => (
          <div key={activity._id} className="col-md-10 text4">
            <div>{activity?.weekday}</div>
            <div>{activity?.activityName}</div>
          </div>
        ))}
    </div>
</div>
      
    </main>
  );
};
export default Profile;