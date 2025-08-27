import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Dashboard = () => {
    
    const navigate = useNavigate();
    
    return (
    
        <div className='min-h-screen'>
            
            {/* Recruiter Panel */}
            <div className='shadow-lg bg-white/40 backdrop-blur-lg py-4'>
                <div className='flex items-center justify-between px-5'>
                    <img onClick={(e)=> navigate('/')} src={assets.logo} className='w-[130px] cursor-pointer' alt="" />
                    <div className='flex items-center gap-3'>
                        <p className='max-sm:hidden'>Welcome, User</p>
                        <div className='relative group'>
                            <img src={assets.company_icon} className='w-8 border rounded-full' alt="" />
                            <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                                    <li className='py-1 px-2 cursor-pointer pr-10'>logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-start'>

                {/* Sidebar */}
                <div className='inline-block min-h-screen border-r-2'>
                    <ul className='flex flex-col items-start pt-5 text-blue-950'>
                        <NavLink className={({isActive})=> `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-700'}`} to={'/dashboard/all-jobs'}>
                            <img src={assets.home_icon} alt="" />
                            <p className='max-sm:hidden'>All Jobs</p>
                        </NavLink>
                        <NavLink className={({isActive})=> `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-700'}`} to={'/dashboard/manage-applications'}>
                            <img src={assets.person_tick_icon} alt="" />
                            <p className='max-sm:hidden'>View Applications</p>
                        </NavLink>
                        <NavLink className={({isActive})=> `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-700'}`} to={'/dashboard/create-a-job'}>
                            <img src={assets.add_icon} alt="" />
                            <p className='max-sm:hidden'>Create a Job</p>
                        </NavLink>
                    </ul>
                </div>

                <div>
                    <Outlet />
                </div>

            </div>

        </div>

    );

};

export default Dashboard;