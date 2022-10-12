import React, { useState } from 'react';
import QuizOption from '../QuizOption/QuizOption';
import { toast } from 'react-toastify';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';


const QuizDetails = ({ quizTopic }) => {
    const [open, setOpen] = useState(true);
    const { question, correctAnswer } = quizTopic;


    const handleAns = (correct) => {
        if (correct === correctAnswer) {
            toast.success('Correct answer', { autoClose: 700 })
        }
        else {
            toast.warning('Incorrent answer!', { autoClose: 700 })
        }
    };


    return (
        <div className='border-4 border-sky-400 rounded-md text-white py-5'>
            <div className='question-section'>
                <div className='flex justify-between'>
                    <h1 className='text-2xl text-white ml-10'>Question : {question}</h1>

                    <div onClick={() => setOpen(!open)} className='h-6 w-6 mr-10 text-blue-300'>
                        {open ? <EyeIcon /> : <EyeSlashIcon></EyeSlashIcon>}
                    </div>
                </div>
                <div className={open ? 'hidden' : 'block'}>
                    <h1 className='text-xl py-2 bg-black px-2 rounded-sm my-5'>
                        <span className='text-sky-500 text-2xl'> Answer : </span>
                        {correctAnswer}
                    </h1>
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