import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quizs = () => {
    const quizTopics = useLoaderData();
    // console.log(quizTopics)
    return (
        <div className='my-10'>
            <div className='text-sky-100 text-3xl font-bold'>
                <h2>Quiz topic: {quizTopics.data.name}</h2>
            </div>
            <div className='grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 m-10 gap-11 

'>
                {
                    quizTopics.data.questions.map(quizTopic => <QuizDetails
                        key={quizTopic.id}
                        quizTopic={quizTopic}
                    ></QuizDetails>)
                }
            </div>
        </div>
    );
};

export default Quizs;