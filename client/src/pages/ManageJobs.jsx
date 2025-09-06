import React, { useContext, useEffect, useState } from 'react';
import { manageJobsData } from '../assets/assets';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loading from '../components/Loading';

const ManageJobs = () => {

    const navigate = useNavigate();

    const { serverUrl, companyToken } = useContext(AppContext);
    const [ jobs, setJobs ] = useState(false);
    
    const fetchCompanyJobs = async()=> {
        
        try {
            
            const { data } = await axios.get(
                serverUrl + '/api/company/list-jobs',
                {headers: {token: companyToken}}
            );

            if (data.success) {
                setJobs(data.jobsData.reverse());
            } else {
                toast.error(data.message);
            };

        } catch (error) {
            toast.error(error.message);
        };

    };

    const changeJobVisibility = async(id)=> {
        try {
            const { data } = await axios.post(
                serverUrl + '/api/company/change-visibility',
                { id }, {headers: {token: companyToken}}
            );

            if (data.success) {
                toast.success(data.message);
                fetchCompanyJobs();
            } else {
                toast.error(data.message);
            };
 
        } catch (error) {
            toast.error(error.message);
        };
    };

    useEffect(()=> {
        if (companyToken) {
            fetchCompanyJobs();
        };
    }, [companyToken]);

    return jobs 
    ? jobs.length === 0 
        ? ( <div className='flex items-center justify-center h-[70vh]'>
                <p className='text-xl sm:text-2xl'>No Jobs Available or Posted!</p>
            </div>) 
        : ( <div className='container p-4 max-w-5xl'>
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
                                jobs.map((job, index) => (
                                    <tr key={index}>
                                        <td className='py-2 px-4 border-b max-sm:hidden'>{index+1}</td>
                                        <td className='py-2 px-4 border-b '>{job.title}</td>
                                        <td className='py-2 px-4 border-b max-sm:hidden'>{moment(job.date).format('MMMM DD, YYYY')}</td>
                                        <td className='py-2 px-4 border-b max-sm:hidden'>{job.location}</td>
                                        <td className='py-2 px-4 border-b text-center'>{job.applicants}</td>
                                        <td className='py-2 px-4 border-b'>
                                            <input onChange={()=> changeJobVisibility(job._id)} type="checkbox" className='scale-125 ml-4' />
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
            </div>) 
    : <Loading />

};

export default ManageJobs;