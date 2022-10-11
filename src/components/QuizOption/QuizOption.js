import React from 'react';

const QuizOption = ({ quiz }) => {
    const { options } = quiz
    console.log(quiz)
    return (
        <div>
            <p>{options}</p>
        </div>
    );
};

export default QuizOption;