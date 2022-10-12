import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border bg-slate-100 text-black m-6 text-left p-6'>
                <h1>Question: 1</h1>
                <h3>What is the purpose of react router?</h3>
                <h3>Answer:</h3>
                <p>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                </p>
            </div>
            <div className='border bg-slate-100 text-black m-6 text-left p-6'>
                <h1>Question: 2</h1>
                <h3>How does context API works?</h3>
                <h3>Answer:</h3>
                <p>
                    React.createContext() is all we need returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page
                </p>
            </div>
            <div className='border bg-slate-100 text-black mx-6 text-left p-6'>
                <h1>Question: 3</h1>
                <h3>Write something about useRef hook.</h3>
                <h3>Answer:</h3>
                <p>
                    1. The useRef Hook allows to persist values between renders.

                    2. It can be used to store a mutable value that does not cause a re-render when updated.

                    3. It can be used to access a DOM element directly.

                    4. If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook.

                    5. useRef() only returns one item. It returns an Object called current.
                </p>
            </div>

        </div>
    );
};

export default Blog;