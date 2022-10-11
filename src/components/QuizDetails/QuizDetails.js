import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import { EyeIcon } from '@heroicons/react/24/solid'

const QuizDetails = ({ quizTopic }) => {
    console.log(quizTopic)
    const { question, options } = quizTopic
    return (
        <div className='border-4 border-sky-300 rounded-md text-white py-5'>
            <div className=''>
                <button className='flex'><EyeIcon className="h-6 w-6 text-blue-500 ml-2" /></button>
                <p>{question}</p>

            </div>
            {/* <p>{correctAnswer}</p> */}

            <div className='grid grid-cols-2 mt-3'>
                <div >
                    <p>{options[0]}</p>
                </div>
                <div>
                    <p>{options[1]}</p>
                </div>
                <div>
                    <p>{options[2]}</p>
                </div>
                <div>
                    <p>{options[3]}</p>
                </div>
            </div>
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