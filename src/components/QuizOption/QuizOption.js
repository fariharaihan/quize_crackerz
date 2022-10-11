import React from 'react';

const QuizOption = ({ quiz, handleAns }) => {

    // console.log(quiz)
    return (
        <div>
            <button onClick={() => handleAns(quiz)} className='btn px-10 mt-5 border-2 border-black bg-indigo-200 text-gray-600'>{quiz}</button>

        </div>

    );
};

export default QuizOption;