import React,{useState} from 'react';
import '../Quiz.css'

//List of Questions and Answers
export default function Quiz() {
    const questions = [
        {
            questionText: 'Did you meet you goal weight this week?',
            answerOptions:[
                {answerText: 'Yes', isCorrect: true },
                {answerText: 'No', isCorrect: false}
            ],
        },
        {
            questionText: 'Did you meet you weekly workout goal this week?',
            answerOptions:[
                {answerText: 'Yes', isCorrect: true },
                {answerText: 'No', isCorrect: false}
            ],
        },
        {
            questionText: 'Did you follow you you dietary plan this week?',
            answerOptions:[
                {answerText: 'Yes', isCorrect: true },
                {answerText: 'No', isCorrect: false}
            ],
        },
        {
            questionText: 'Did you meet your daily water intake goal?',
            answerOptions:[
                {answerText: 'Yes', isCorrect: true },
                {answerText: 'No', isCorrect: false}
            ],
        },
        {
            questionText: 'Did you meet your nightly sleep goal?',
            answerOptions:[
                {answerText: 'Yes', isCorrect: true },
                {answerText: 'No', isCorrect: false}
            ],
        },
    ];


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (isCorrect) => {

        if(isCorrect === true ){
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion +1;
        if (nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }
        else{
            setShowScore(true);
        }  
    }

    return (
		<div className="app quiz mt-5 container">
			{}
			{showScore ? (
				<div className="score-section">You completed {score} out of {questions.length} goals this week!</div>
			) : (
				<>
                <div className="row m-3">
					<div className="col-12 question-section">
						<div className="question-count">
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>

                        
						<div className="question-text">{questions[currentQuestion].questionText}</div>
					</div>

       
					<div className="col-12 answer-section">
						{questions[currentQuestion].answerOptions.map((answerOption) =>( 
                        <button 
                        style={{ marginLeft: "auto" }}
                        className="answerBtn btn btn-outline-success btn-lg" 
                        onClick={() =>handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}
                        </button>
                        ))}
						
					</div>
                </div>
				</>
			)}
		</div>
	);
}