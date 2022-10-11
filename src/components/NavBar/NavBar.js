import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='bg-zinc-800 text-white flex justify-between p-5'>
            <div className='text-2xl font-semibold'>
                <h3>Quiz-Crackerz-Zone</h3>
            </div>

            <div className='text-xl'>
                <Link to='/'></Link>
                <Link to='/home'>Home</Link>
                <Link to='/topic'>Topic</Link>
                <Link to='/statistic'>Statistic</Link>
                <Link to='/blog'>Blog</Link>

            </div>
        </nav>
    );
};

export default NavBar;