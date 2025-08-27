import React, { useContext } from "react";
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

    return (
        <div className="shadow-lg fixed top-0 left-0 w-full bg-white/40 backdrop-blur-lg py-4 z-10">
            <div className="container px-5 mx-auto flex justify-between items-center">
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
                        <button onClick={ e => setShowRecruiterLogin(true) } className="text-gray-600">Recruiter Login</button>
                        <button onClick={ e => openSignIn()} className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full hover:bg-black hover:shadow-lg'>Login</button>
                    </div>
                }
                
            </div>
        </div>  
    );
};

export default Navbar;