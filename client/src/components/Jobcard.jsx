import React from 'react';
import { useNavigate } from 'react-router-dom';

const Jobcard = ({ job }) => {

    const navigate = useNavigate();
    
    return (
        <div className='border p-6 rounded-2xl'>
            <div className='flex items-center gap-3'>
                <img className='h-8' src={job.companyId.image} alt="" />
                <span>{job.companyId.name}</span>
            </div>
            <h4 className='font-medium text-xl mt-2'>{job.title}</h4>
            <div className='flex items-center gap-3 mt-2 text-xs'>
                <span className='bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg px-4 py-1.5 rounded-full'>{job.location}</span>
                <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg px-4 py-1.5 rounded-full'>{job.level}</span>
            </div>
            <p className='text-gray-500 text-sm mt-4' dangerouslySetInnerHTML={{__html:job.description.slice(0, 150)}}></p>
            <div className='mt-4 flex gap-4 text-sm'>
                <button onClick={ ()=> {navigate(`/apply-job/${job._id}`); scrollTo(0, 0)}} className='bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded shadow-lg'>
                    Apply Now
                </button>
                <button onClick={ ()=> {navigate(`/apply-job/${job._id}`); scrollTo(0, 0)}} className='bg-gradient-to-r from-white to-slate-300 px-4 py-2 rounded shadow-lg'> 
                    Learn More
                </button>
            </div>
        </div>
    );

};

export default Jobcard;