import React from 'react';

const QuizOption = ({ quiz }) => {
    const { correctAnswer } = quiz
    // console.log(quiz)
    return (
        <div>
            <p>{correctAnswer}</p>
        </div>
    );
};

export default QuizOption;