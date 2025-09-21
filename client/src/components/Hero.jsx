import React, { useContext, useRef } from 'react';
import { FiMapPin } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { assets } from '../assets/assets.js';
import { AppContext } from '../context/AppContext.jsx';
import bgImg from '../assets/bg-hero.jpg';
import heroImg from '../assets/hero-image.png'


const Hero = () => {

    const { setSearchFilter, setIsSearched } = useContext(AppContext);

    const titleRef = useRef(null);
    const locationRef = useRef(null);

    const onSearch = ()=> {
        setSearchFilter({
            title:titleRef.current.value,
            location:locationRef.current.value,
        })
        setIsSearched(true);
    }

    return (
        
        <>

            <section className='w-full'>
                <div style={{backgroundImage: `url(${bgImg})`}} className='relative h-screen bg-cover bg-center bg-no-repeat'>
                    <div className='absolute inset-0 backdrop-blur-xl bg-white/30 w-full flex items-center justify-center'>
                        <div className='max-w-8xl grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10 lg:gap-5 px-5'>
                            <div className='order-2 lg:order-1'>
                                <h1 className='text-3xl md:text-4xl xl:text-6xl font-semibold'>Your Next <span className='text-[#16a44d]'>Opportunity.</span> <br /> Our Next-Gen <span className='text-[#853bed]'>Platform.</span></h1>
                                <p className='max-w-xl text-xl mt-5'>Finding your dream job or your ideal candidate has never been this simple. Our smart platform uses cutting-edge technology to connect you with the perfect fit, fast.</p>
                            </div>
                            <div className='order-1 lg:order-2 text-center'>
                                <img src={heroImg} className='md:w-[600px] sm:w-[400px]' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container 2xl:px-20 mx-auto mt-28 my-10'>

                {/* Banner Section */}
                    <div className='bg-gradient-to-r from-[#7320f0] to-[#e060f5] text-white py-16 text-center mx-2 rounded-xl'>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 1000+ Jobs to Apply</h2>
                        <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>NextHire connects ambitious professionals with top opportunities, paving the way for brighter careers and successful hires.</p>
                        <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'>
                            <div className='flex items-center'>
                                <IoSearch className='h-8 sm:h-10' />
                                <input 
                                    type="text" 
                                    placeholder='Search For Job'
                                    className='max-sm:text-xs p-2 ourline-none w-full'
                                    ref={titleRef} />
                            </div>
                            <div className='flex items-center'>
                                <FiMapPin className='h-8 sm:h-10' />
                                <input 
                                    type="text" 
                                    placeholder='Location'
                                    className='max-sm:text-xs p-2 ourline-none w-full'
                                    ref={locationRef} />
                            </div>
                            <button onClick={onSearch} className='bg-[#7320f0] text-white px-6 py-2 rounded m-1'>Search</button>
                        </div>
                    </div>

                    {/* Trusted By */}
                    <div className='border flex items-center justify-center border-gray-700 shadow-md mx-2 mt-5 p-6 rounded-md'>
                        <div className='flex items-center justify-center gap-10 lg:gap-16 flex-wrap'>
                            <p className='font-medium'>Trusted By</p>
                            <img className='h-6' src={assets.microsoft_logo} alt="" />
                            <img className='h-6' src={assets.walmart_logo} alt="" />
                            <img className='h-6' src={assets.accenture_logo} alt="" />
                            <img className='h-6' src={assets.samsung_logo} alt="" />
                            <img className='h-6' src={assets.amazon_logo} alt="" />
                            <img className='h-6' src={assets.adobe_logo} alt="" />
                        </div>
                    </div>

                </div>
            </section>

        </>

    );
};

export default Hero;