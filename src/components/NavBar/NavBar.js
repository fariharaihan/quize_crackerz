import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='m-2' >
            <header className="p-4 bg-slate-50 text-gray-800">
                <div className="container flex justify-between  mx-auto">
                    <span className='ml-2 text-3xl font-bold tracking-wide text-blue-400 '>
                        Quiz-Crackerz-Zone
                    </span>

                    <nav className='flex flex-wrap items-center space-x-4 sm:space-x-8'>

                        <Link to='/'>Home</Link>
                        <Link to='/topic'>Topic</Link>
                        <Link to='/statistic'>Statistic</Link>
                        <Link to='/blog'>Blog</Link>
                    </nav>
                </div>
            </header>


        </div>

    );
};

export default NavBar;