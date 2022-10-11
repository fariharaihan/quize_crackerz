import React from 'react';
import Topic from '../Topic/Topic';

const Home = () => {
    return (
        <div className='bg-gray-900 mt-6'>
            <section className="dark:dark:bg-gray-800 text-white">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 ">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:dark:bg-gray-900 border">
                        <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                            <span className="text-xs text-white">February 19, 2021</span>
                            <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                        </div>
                    </a>
                    <div >

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;