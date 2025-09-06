import React, { useContext, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Dashboard = () => {
    
    const navigate = useNavigate();

    const { companyData, setCompanyData, setCompanyToken } = useContext(AppContext);

    const logout = async()=> {
        setCompanyToken(null);
        localStorage.removeItem('companyToken');
        setCompanyData(null);
        navigate('/');
    };

    useEffect(()=> {
        if (companyData) {
            navigate('/dashboard/all-jobs');
        };
    }, [companyData]);

    return (
    
        <div className='min-h-screen'>
            
            {/* Navbar */}
            <div className='shadow-lg bg-white/40 backdrop-blur-lg py-4'>
                <div className='flex items-center justify-between px-5'>
                    <img onClick={(e)=> navigate('/')} src={assets.logo} className='w-[130px] cursor-pointer' alt="" />
                    {
                        companyData && (
                            <div className='flex items-center gap-3'>
                                <p className='max-sm:hidden'>Welcome, {companyData.name}</p>
                                <div className='relative group'>
                                    <img src={companyData.image} className='w-8 border rounded-full' alt={companyData.name} />
                                    <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                                        <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                                            <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>logout</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    }
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

                <div className='flex-1 h-full p-2 sm:p-5'>
                    <Outlet />
                </div>

            </div>

        </div>

    );

};

export default Dashboard;