import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
// import Question from '../components/Question/index';
// import Answer from '../components/Answer/index';
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
                {answerText: '< 4ft', isCorrect: true },
                {answerText: '4ft-5ft', isCorrect: true},
                {answerText: '5ft-6ft', isCorrect: true},
                {answerText: '> 6ft', isCorrect: true},
            ],
        },
        {
            questionText: 'How many times per week do you hope to work out?',
            answerOptions:[
                {answerText: 'I do not wish to workout at all', isCorrect: true },
                {answerText: '1-2 times per week', isCorrect: true},
                {answerText: '3-4 times per week', isCorrect: true},
                {answerText: '5 times or mor per week', isCorrect: true},
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
                {answerText:  '16-20', isCorrect: true},
                {answerText: '21-30', isCorrect: true},
                {answerText: '31 or older', isCorrect: true},
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
    return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{false ? (
				<div className='score-section'>You scored 1 out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>

                        
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>

       
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) =>( 
                        <button>{answerOption.answerText}</button>
                        ))}
						
					</div>
				</>
			)}
		</div>
	);
}