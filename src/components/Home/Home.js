import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import TopicsDetails from '../TopicsDetails/TopicsDetails';

const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <Header></Header>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-8 lg:ml-0 md:ml-12 s'>
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

export default Home;