import React from 'react';
// import { Redirect, useParams } from 'react-router-dom';
// import StoryList from '../components/StoryList';
// import { useQuery, useMutation } from '@apollo/react-hooks';
// import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import FriendList from '../components/FriendList';
// import Auth from '../utils/auth';
// import { ADD_FRIEND } from '../utils/mutations';
// import StoryForm from '../components/StoryForm';
// import Script from '../javascript\Script.js';


const Calendar = () => {

  


    return (
<div>
    <header className="jumbotron">
      <h1 className="display-3">Week Schedule</h1>
      <p id="currentDay" className="lead"></p>
    </header>
    <div className="container">
      <div id="9am" className="row time-block">
        <div className="col-md-1 hour">9 AM</div>
        <textarea className="col-md-10 description 9"></textarea>
        <button  type="button" className="col-md-1 btn saveBtn"><i className="fas fa-save"></i></button>
      </div>

      <div id="10am" className="row time-block">
        <div className="col-md-1 hour">10 AM</div>
        <textarea className="col-md-10 description 10"></textarea>
        <button type="button" className="col-md-1 btn saveBtn"><i className="fas fa-save"></i></button>
      </div>

      <div id="11am" className="row time-block">
        <div className="col-md-1 hour">11 AM</div>
        <textarea className="col-md-10 description 11"></textarea>
        <button type="button" className="col-md-1 btn saveBtn"><i className="fas fa-save"></i></button>
      </div>

      <div id="12pm" className="row time-block">
        <div className="col-md-1 hour">12 PM</div>
        <textarea className="col-md-10 description 12"></textarea>
        <button type="button" className="col-md-1 btn saveBtn"><i className="fas fa-save"></i></button>
      </div>

      <div id="1pm" className="row time-block">
        <div className="col-md-1 hour">1 PM</div>
        <textarea className="col-md-10 description 13"></textarea>
        <button type="button" className="col-md-1 btn saveBtn"><i className="fas fa-save"></i></button>
      </div>

      <div id="2pm" className="row time-block">
        <div className="col-md-1 hour">2 PM</div>
        <textarea className="col-md-10 description 14"></textarea>
        <button type="button" className="col-md-1 btn saveBtn"><i className="fas fa-save"></i></button>
      </div>

      <div id="3pm" className="row time-block">
        <div className="col-md-1 hour">3 PM</div>
        <textarea className="col-md-10 description 15"></textarea>
        <button type="button" className="col-md-1 btn saveBtn"><i className="fas fa-save"></i></button>
      </div>  
    </div>
    </div>
    );

};

export default Calendar;