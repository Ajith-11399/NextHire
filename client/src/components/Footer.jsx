import React from 'react';
import { assets } from '../assets/assets.js';
import logo from '../assets/logo/logo.png'
import { AiOutlineLinkedin } from 'react-icons/ai';
import { ImFacebook } from 'react-icons/im';
import { FaXTwitter } from 'react-icons/fa6';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4  py-3 mt-20'>
            <img src={logo} width={"200px"} alt="" />
            <div>
                <p className='flex-1 border-gray-400 px-4 text-sm text-gray-500 max-sm:hidden'>&copy; {new Date().getFullYear()} AJ. All Rights Reserved.</p>
            </div>
            <div className='flex gap-2.5'>
                <a href="https://www.linkedin.com" target='_black'>
                    <AiOutlineLinkedin />
                </a>
                <a href="https://www.facebook.com" target='_black'>
                    <ImFacebook />
                </a>
                <a href="https://www.twitter.com" target='_black'>
                    <FaXTwitter />
                </a>
                <a href="https://www.instagram.com" target='_black'>
                    <BsInstagram />
                </a>
            </div>
        </div>
    );
};

export default Footer;