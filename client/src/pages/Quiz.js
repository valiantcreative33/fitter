import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Question from '../components/Question/index';
import Answer from '../components/Answer/index';
import '../Quiz.css'


export default class Quiz extends Component {

    //quiz questions/answers
    state = {
        questions: {
            1: 'How do you identify?',
            2: 'What your main goal with Fitter?',
            3: 'What is your height?',
            4: 'How many times per week do you hope to work out?',
            5: 'What is your ideal calorie intake per day?',
            6: 'what is your age?',
            7: 'What is your current weight?',
            8: 'What is your goal weight?'
        },
        answers: {
            1: {
                1: 'Female',
                2: 'Male',
                3: 'Other'
            },
            2: {
                1: 'To lose weight',
                2: 'To eat healthier meals',
                3: 'To be healthier overall'
            },
            3: {
                1: '< 140 cm',
                2: '140-150 cm',
                3: '150-160 cm',
                4: '160-170 cm',
                5: '> 170 cm'
            },
            4: {
                1: 'I do not wish to workout at all',
                2: '1-2 times per week',
                3: '3-4 times per week',
                4: '5-6 times per week',
                5: 'I wish to work out every day!'
            },
            5: {
                1: '< 1000 calories',
                2: '1200-1400 calories',
                3: '1800-2000 calories',
                4: '2200-2400 calories',
                5: '> 2600 calories'
            },
            6: {
                1: '< 15',
                2: '16-20',
                3: '21-30',
                4: '31-40',
                5: '41-60',
                6: '> 61'
            },
            7: {
                1: '< 90 lbs',
                2: '91-110 lbs',
                3: '111-130 lbs',
                4: '131-150 lbs',
                5: '151-170 lbs',
                6: '171-190 lbs',
                7: '> 191 lbs'
            },
            8: {
                1: '< 90 lbs',
                2: '91-110 lbs',
                3: '111-130 lbs',
                4: '131-150 lbs',
                5: '151-170 lbs',
                6: '171-190 lbs',
                7: '> 191 lbs'
            }
        },
        clickedAnswer: 0,
        step: 1
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
            //once user submit ask update question index to 5 proceed to display the options? this.state.question1
          alert(`Hello ${this.state.clickedAnswer}`);
          //call a post request
        //   let usercreateobj= {
        //       name: this.state.name,
        //       age: this.state.question1
        //     }
        
        // }

      };

      
    checkAnswer = answer => {
        const {clickedAnswer, step} = this.state;
        if(answer === clickedAnswer[step]) {
            this.setState({
                clickedAnswer: answer
            });
        }
    }

    nextQuestion = (step) => {
        this.setState({
            step: step + 1,
            clickedAnswer: 0
        });
    }


    render() {
        let { questions, answers, clickedAnswer, step } = this.state;
        return(
            <div className="quiz mt-5">
               {step <= Object.keys(questions).length ?
               (<>
                <Question question={questions[step]} />
                <Answer 
                    answer = {answers[step]} 
                    step={step}
                    checkAnswer={this.checkAnswer}
                    clickedAnswer={clickedAnswer}
                />
                <button
                className="nextQuestion story-button btn btn-outline-success btn-lg"
                // disabled={
                //     clickedAnswer && Object.keys(questions).length >= step ? false : true
                // }
                onClick={() => this.nextQuestion(step)}>next</button>
                 </>) : (
                <div className="results">
                    <h1>You have completed your self assessment! Here are your results:</h1>
                    <p>display results here lol</p>
                    <Link className="nav-link px-3 mx-3 back" to="/profile">back to my profile</Link>
                </div>
            )}
            </div> 
        );
    }
}

// {step => 6 ? 
//     (<>
//         <input
//         value={this.state.question}
//         name="question1"
//         onChange={this.handleInputChange}
//         type="text"
//         placeholder="this is your first question"
//       />
     
//       <button className="nextQuestion story-button btn btn-outline-success btn-lg" onClick={this.handleFormSubmit}>next</button>
      
//     </>) :(