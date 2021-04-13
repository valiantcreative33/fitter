import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import StoryList from '../components/StoryList';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import FriendList from '../components/FriendList';
import Auth from '../utils/auth';
import { ADD_FRIEND } from '../utils/mutations';
import StoryForm from '../components/StoryForm';
import Script from '../javascript\Script.js';


const Calendar = () => {

    //dispaly current day at the top of the document
var currentDate = moment().format("dddd, MMM Do YYYY, h:mm:ss a");
 document.querySelector("#currentDay").html(currentDate);

windows.onload = (function(){
    $(".saveBtn").on("click", function(){
        
        var task = document.body.siblings(".description").val();
        var time = document.body.parent().attr("id");

        //when user click save, info is saved into localStorage
        localStorage.setItem(time, task); 
    })
    
    //keep information after user refrshes page
    //Retrieve time from the DOM
    //Use that to retrieve the task from local storage
    //Update task in the DOM

    // $(".time-block").each(function(){

    //     var task = $(this).children(".description").val();
    //     var time = $(this).attr("id");

    //     var retrieveTime = localStorage.getItem(time);

    //     console.log('task',task);
    //     console.log('time',time);

    //     if(retrieveTime){
    //         console.log('retrieve time', retrieveTime)   
    //         time = $(this).children(".description").val(retrieveTime); 
    //     }     
    });


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