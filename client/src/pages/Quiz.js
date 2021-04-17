import React,{useState} from 'react';
import '../Quiz.css'

//List of Questions and Answers
export default function Quiz() {
    const questions = [
        {
            questionText: 'What is your main goal with Fitter?',
            answerOptions:[
                {answerText: 'To lose weight', isCorrect: true },
                {answerText: 'To eat healthier meals', isCorrect: true},
                {answerText: 'To be healthier overall', isCorrect: true},
                {answerText: 'Other', isCorrect: true},
            ],
        },
        {
            questionText: 'What is your height?',
            answerOptions:[
                {answerText: '< 4 ft', isCorrect: true },
                {answerText: '4-5 ft', isCorrect: true},
                {answerText: '5-6ft', isCorrect: true},
                {answerText: '> 6 ft', isCorrect: true},
            ],
        },
        {
            questionText: 'How many times per week do you hope to work out?',
            answerOptions:[
                {answerText: 'I do not wish to workout at all', isCorrect: true },
                {answerText: '1-2 times per week', isCorrect: true},
                {answerText: '3-4 times per week', isCorrect: true},
                {answerText: '5 times or more per week', isCorrect: true},
            ],
        },
        {
            questionText: 'What is your ideal calorie intake per day?',
            answerOptions:[
                {answerText: '< 1000 calories', isCorrect: true },
                {answerText: '1200-1400 calories', isCorrect: true},
                {answerText: '1800-2000 calories', isCorrect: true},
                {answerText: '2200 or more calories', isCorrect: true},
            ],
        },
        {
            questionText: 'what is your age?',
            answerOptions:[
                {answerText: '< 15', isCorrect: true },
                {answerText:  '16-30', isCorrect: true},
                {answerText: '31-50', isCorrect: true},
                {answerText: '51 or older', isCorrect: true},
            ],
        },
        {
            questionText: 'What is your current weight?',
            answerOptions:[
                {answerText: '< 99 lbs', isCorrect: true },
                {answerText:  '99-150 lbs', isCorrect: true},
                {answerText: '151-200 lbs', isCorrect: true},
                {answerText: '200 or more lbs', isCorrect: true},
            ],
        },
        {
            questionText: 'What is your goal weight?',
            answerOptions:[
                {answerText: '< 99 lbs', isCorrect: true },
                {answerText:  '99-150 lbs', isCorrect: true},
                {answerText: '151-200 lbs', isCorrect: true},
                {answerText: '200 or more lbs', isCorrect: true},
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
				<div className="score-section">You scored {score} out of {questions.length}</div>
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