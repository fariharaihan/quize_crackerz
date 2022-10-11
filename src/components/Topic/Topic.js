import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Home from '../Home/Home';
import TopicsDetails from '../TopicsDetails/TopicsDetails';

const Topic = () => {
    const topics = useLoaderData()
    // console.log(topics.data)
    return (
        <div>
            <Home></Home>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-8'>
                {
                    topics.data.map(topic => <TopicsDetails
                        key={topic.id}
                        topic={topic}
                    ></TopicsDetails>)
                }
            </div>
        </div>
    );
};

export default Topic;