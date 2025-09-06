import React, { useContext, useEffect, useState } from 'react';
import { assets, viewApplicationsPageData } from '../assets/assets.js';
import { AppContext } from '../context/AppContext.jsx';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loading from '../components/Loading.jsx';


const ViewApplications = () => {

    const { serverUrl, companyToken } = useContext(AppContext);

    const [ applicant, setApplicant ] = useState(false);

    const fetchCompanyJobApplications = async()=> {
        try {
          
            const { data } = await axios.get(serverUrl + '/api/company/applicants',
                {headers: {token: companyToken}}
            );

            if (data.success) {
                setApplicant(data.applications.reverse());
            } else {
                toast.error(data.message);                
            };

        } catch (error) {
            toast.error(error.message);
        };
    };

    const changeApplicationStatus = async(id, status)=> {
        try {

            const { data } = await axios.post(
              serverUrl + '/api/company/change-status',
              {id, status},
              {headers: {token: companyToken}}
            );

            if (data.success) {
                fetchCompanyJobApplications();
            } else {
                toast.error(data.message);
            };

        } catch (error) {
            toast.error(error.message);
        };
    };

    useEffect(()=> {
        if (companyToken) {
            fetchCompanyJobApplications()
        };
    }, [companyToken]);
    
    return applicant 
        ? applicant.length === 0 
            ?   (<div className='flex items-center justify-center h-[70vh]'>
                    <p className='text-xl sm:text-2xl'>No Applications Available!</p>
                </div>) 
            :   (<div className='container mx-auto p-4'>
                    <div>
                        <table className='w-full max-w-4xl bg-white border border-blue-400 max-sm:text-sm'>
                            <thead>
                                <tr>
                                    <th className='py-2 px-4 text-left'>Sl. no.</th>
                                    <th className='py-2 px-4 text-left'>Username</th>
                                    <th className='py-2 px-4 text-left max-sm:hidden'>Job Title</th>
                                    <th className='py-2 px-4 text-left max-sm:hidden'>Location</th>
                                    <th className='py-2 px-4 text-left'>Resume</th>
                                    <th className='py-2 px-4 text-left'>Action</th>
                                </tr>

                            </thead>

                            <tbody>
                                {
                                    applicant.filter(item => item.jobId && item.userId).map((item, index) => (
                                        <tr key={index} className='text-gray-700'>
                                            <td className='py-2 px-4 border-b text-center'>{index+1}</td>
                                            <td className='py-2 px-4 border-b text-center flex items-center'>
                                                <img src={item.userId.image} className='w-10 h-10 rounded-full mr-3 max-sm:hidden' alt="" />
                                                <span>{item.userId.name}</span>
                                            </td>
                                            <td className='py-2 px-4 border-b max-sm:hidden'>{item.jobId.title}</td>
                                            <td className='py-2 px-4 border-b max-sm:hidden'>{item.jobId.location}</td>
                                            <td className='py-2 px-4 border-b'>
                                                <a href={item.userId.resume} target='_blank' className='bg-blue-50 text-blue-400 px-3 py-1 rounded inline-flex gap-2 items-center'>
                                                    Resume <img src={assets.resume_download_icon} alt="" />
                                                </a>
                                            </td>
                                            <td className='py-2 px-4 border-b relative'>
                                                {
                                                    item.status === "Pending"
                                                    ?   <div className='relative inline-block text-left group'>
                                                            <button className='text-gray-500 action-button'>...</button>
                                                            <div className='hidden absolute right-0 md:left-0 top-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow group-hover:block'>
                                                                <button onClick={()=> changeApplicationStatus(item._id, 'Accepted')} className='block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100'>Accept</button>
                                                                <button onClick={()=> changeApplicationStatus(item._id, 'Rejected')} className='block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100'>Reject</button>
                                                            </div>
                                                        </div>
                                                    :   <div><p>{item.status}</p></div>
                                                }

                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>                            
                        </table>                          
                    </div>
                </div>) 
        : <Loading />

};

export default ViewApplications;