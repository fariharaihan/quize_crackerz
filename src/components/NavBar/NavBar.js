import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='m-2' >
            <header className=" p-4 bg-slate-50 text-gray-800">
                <div className="container flex justify-between  mx-auto">
                    <nav className='flex items-center '>
                        <ui className={`menu md:menu-horizontal md:static absolute duration-500 bg-slate-50  ease-in  ${open ? 'top-16' : 'top-[-200px]'}`}>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/topic'>Topic</Link></li>
                            <li><Link to='/statistic'>Statistic</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ui>
                        <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden" >
                            {
                                open ? <XMarkIcon /> : <Bars3Icon />
                            }
                        </div>
                    </nav>
                    <span className='ml-2 text-3xl font-bold tracking-wide text-blue-400 '>
                        Quiz-Class
                    </span>
                </div>
            </header>


        </div>

    );
};

export default NavBar;