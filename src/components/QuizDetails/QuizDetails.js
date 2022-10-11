import React from 'react';
import QuizOption from '../QuizOption/QuizOption';

const QuizDetails = ({ quizTopic }) => {
    console.log(quizTopic)
    const { question, correctAnswer } = quizTopic
    return (
        <div className='border-4 border-sky-300 rounded-md'>
            <p>{question}</p>
            <p>{correctAnswer}</p>
            <div >
                {
                    quizTopic.options.map(quiz => <QuizOption
                        key={quiz.id}
                        quiz={quiz}></QuizOption>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;