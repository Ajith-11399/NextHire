import React, { useContext, useEffect, useState } from "react";
// import { assets } from '../assets/assets.js';
import logo from '../assets/logo/logo.png'
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
    
    const { openSignIn } = useClerk();
    const { user } = useUser();

    const navigate = useNavigate();

    const { setShowRecruiterLogin } = useContext(AppContext);

    const [ isScroll, setIsScroll ] = useState(false);

    useEffect(()=> {
        const handleScroll = ()=> {
            if (window.scrollY >= 70) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            };
        };
        window.addEventListener('scroll', handleScroll);
        return ()=> window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full py-4 z-10 tr ${isScroll ? 'bg-white/40 backdrop-blur-lg shadow transition-all duration-500' : 'backdrop-blur-none bg-none'} `}>
            <div className="container px-5 md:px-20 mx-auto flex justify-between items-center">
                <Link to='/'>
                    <img onClick={()=> navigate('/')} src={logo} alt="" className="p-0 w-[130px]" />
                </Link>
                {
                    user 
                    ? 
                    <div className="flex items-center gap-3">
                        <Link to='/applications'>
                            Applied Jobs
                        </Link>
                        <p>|</p>
                        {/* <p>Hi, {user.firstName+" "+ user.lastName}</p> */}
                        <p className="max-sm:hidden">Hi, {user.firstName + (user.lastName ? " " + user.lastName : "")}</p>
                        <UserButton />
                    </div>
                    :
                    <div className="flex gap-4 max-sm:text-xs">
                        <button onClick={ e => setShowRecruiterLogin(true) } className="bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg px-5 py-1.5 rounded">Recruiter Login</button>
                        <button onClick={ e => openSignIn()} className='bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg px-5 py-1.5 rounded'>Login</button>
                    </div>
                }
                
            </div>
        </div>  
    );
};

export default Navbar;