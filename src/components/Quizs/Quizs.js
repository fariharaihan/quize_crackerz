import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quizs = () => {
    const quizTopics = useLoaderData();
    // console.log(quizTopics)
    return (
        <div>
            <h2>Topics</h2>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 m-10 gap-11 

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