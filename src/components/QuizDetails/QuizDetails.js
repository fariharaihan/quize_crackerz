import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import { toast } from 'react-toastify';


const QuizDetails = ({ quizTopic }) => {
    console.log(quizTopic)
    const { question, correctAnswer, options, id } = quizTopic



    const handleAns = (correct) => {
        if (correct === correctAnswer) {
            toast.success('Curert answer', { autoClose: 500 })
        }
        else {
            toast.warning('Incorrent answer!', { autoClose: 500 })
        }
    }
    return (
        <div className='border-4 border-sky-500 rounded-md text-white py-5'>
            <div className='question-section'>
                {/* <div className='question-count'>
                    <span>Question</span>
                </div> */}
                <div className='flex justify-between px-5'>
                    <h1 className='text-2xl text-white'>Question : {question}</h1>

                </div>
            </div>

            <div >
                {
                    quizTopic.options.map(quiz => <QuizOption
                        key={quiz.id}
                        handleAns={handleAns}
                        quiz={quiz}></QuizOption>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;