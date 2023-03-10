import React from 'react';
import { Link } from 'react-router-dom';


const TopicsDetails = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-900 mb-5">
                <img src={logo} alt="" className="object-cover object-center w-full roundedi-md h-72 border" />
                <div className="flex flex-col justify-between p-6 space-y-8 bg-white">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="text-gray-900">Total:{total}</p>
                    </div>
                    <Link to={`/topic/${id}`}> <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-300
                 text-gray-900">Quiz test</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TopicsDetails;