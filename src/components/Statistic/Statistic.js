import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistic = () => {
    const statistics = useLoaderData()
    console.log(statistics.data)
    return (
        <div>
            <div>
                <h1 className=' text-3xl font-semibold text-white '>LineChart</h1>
            </div>
            <div className='text-black font-semibold  bg-sky-100 lg:m-7 md:m-7 py-16 flex justify-center sm:w-100 '>



                <LineChart
                    width={500}
                    height={300}
                    data={statistics.data}

                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />

                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>




            </div>
        </div >
    );
};

export default Statistic;