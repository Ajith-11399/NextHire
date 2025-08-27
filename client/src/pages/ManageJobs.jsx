import React from 'react';
import { manageJobsData } from '../assets/assets';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const ManageJobs = () => {

    const navigate = useNavigate();
    
    return (
    
        <div className='container p-4 max-w-5xl'>
            <div className='overflow-x-auto'>
                <table className='min-w-full bg-white border border-gray-200 max-sm:text-sm'>
                    <thead>
                        <tr>
                            <th className='py-2 px-4 border-b text-left max-sm:hidden'>Sl. no.</th>
                            <th className='py-2 px-4 border-b text-left'>Job Title</th>
                            <th className='py-2 px-4 border-b text-left max-sm:hidden'>Date</th>
                            <th className='py-2 px-4 border-b text-left max-sm:hidden'>Location</th>
                            <th className='py-2 px-4 border-b text-center'>Applicants</th>
                            <th className='py-2 px-4 border-b text-left'>Visible</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageJobsData.map((item, index) => (
                                <tr key={index}>
                                    <td className='py-2 px-4 border-b max-sm:hidden'>{index+1}</td>
                                    <td className='py-2 px-4 border-b '>{item.title}</td>
                                    <td className='py-2 px-4 border-b max-sm:hidden'>{moment(item.date).format('11')}</td>
                                    <td className='py-2 px-4 border-b max-sm:hidden'>{item.location}</td>
                                    <td className='py-2 px-4 border-b text-center'>{item.applicants}</td>
                                    <td className='py-2 px-4 border-b'>
                                        <input type="checkbox" className='scale-125 ml-4' />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='mt-4 flex justify-end'>
                <button onClick={()=> navigate('/dashboard/create-a-job')} type='submit' className='w-fit px-7 rounded shadow-lg py-2 mt-4 bg-black text-white'>Add new job</button>
            </div>
        </div>

    );

};

export default ManageJobs;