 import React from 'react';
 import './script.css';

 const Answer = (props) => {
     let answers = Object.keys(props.answer)
        .map((answerQ, i) => (
            <li 
            onClick={() => props.checkAnswer(answerQ)}
            key={answerQ}>
                {props.answer[answerQ]}
            </li>
        ));
    return (
        <>
            <ul disabled={props.clickedAnswer ? true : false} className="answer">
                {answers}
            </ul>
        </>
    );
 }

 export default Answer;
