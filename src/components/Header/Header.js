import React from 'react';

const Header = () => {
    return (
        <div className='bg-gray-900 mt-6'>
            <section className="dark:dark:bg-gray-800 text-white">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 ">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:dark:bg-gray-900 border">
                        <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:dark:bg-gray-500" />
                        <div className="px-6 py-16 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Play a Quiz for Free!</h3>
                            <span className="text-xs text-white">October 12, 2022</span>
                            <p>When you're playing a quiz you have to keep your mind on what you are doing. So it is very important.</p>
                            <h3 className="text-xl font-medium sm:text-2xl ">Are you ready for quiz test?</h3>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Header;