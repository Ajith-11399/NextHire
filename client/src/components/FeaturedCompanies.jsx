import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const FeaturedCompanies = () => {

    const { serverUrl } = useContext(AppContext);

    const [ companies, setCompanies ] = useState([]);

    const fetchCompanies = async()=> {
        try {
            
            const { data } = await axios.get(
                serverUrl + '/api/company/all-companies',
            );

            if (data.success) {
                setCompanies(data.companies);
            } else {
                toast.error(data.message);
            };

        } catch (error) {
            toast.error(error.message);
        };
    };

    useEffect(()=> {
        fetchCompanies()
    }, []);

    return (

        <section>
            <div className='w-full py-10 flex flex-col items-center justify-center'>
                <div className='text-center'>
                    <p className='text-5xl text-center'>
                        Featured Companies
                    </p>
                    <p className='py-2'>Connecting You with Industry Leaders</p>
                </div>
                <div className='w-full max-w-6xl py-10'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={4}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        className='flex items-center'
                    >
                        {companies.map((ele, ind) => {
                            return (
                                <SwiperSlide key={ind}>
                                    <div className='border-[1.5px] border-blue-100 transition-all duration-500 rounded-xl p-5 my-10 flex flex-col items-center'>
                                        <div className='w-[100px] h-[100px] flex items-center justify-center'>
                                            <img src={ele.image} alt={ele.name} className='w-[100px] h-[50px] object-contain' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    
    );

};

export default FeaturedCompanies;