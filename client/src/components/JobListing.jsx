import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { RxCrossCircled } from "react-icons/rx";
import { JobCategories, JobLocations } from "../assets/assets.js";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import RelatedJobs from "./RelatedJobs.jsx";


const JobListing = () => {
    const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);

    const [showFilter, setShoWFilter] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);

    const [filteredJobs, setFilteredJobs] = useState(jobs);

    const itemsPerPage = 4;
    const totalItems = filteredJobs.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    const handleLocationChange = (location) => {
        setSelectedLocations((prev) =>
            prev.includes(location) ? prev.filter((c) => c !== location) : [...prev, location]
        );
    };

    useEffect(() => {
        const matchesCategory = (job) => selectedCategories.length === 0 || selectedCategories.includes(job.category);
    
        const matchesLocation = (job) => selectedLocations.length === 0 || selectedLocations.includes(job.location);
    
        const matchesTitle = (job) => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
    
        const matchesSearchLocation = (job) => searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());
    
        const newFilteredJobs = jobs.slice().reverse().filter((job) => matchesCategory(job) && matchesLocation(job) && matchesTitle(job) && matchesSearchLocation(job));
        
        setFilteredJobs(newFilteredJobs);
        setCurrentPage(1);
    }, [jobs, selectedCategories, selectedLocations, searchFilter]);

    const getVisiblePages = () => {
        const pages = [];
        const start = Math.max(1, currentPage - 1);
        const end = Math.min(totalPages, currentPage + 1);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4 bg-white px-4">
                {/* Search Filter from Hero Component */}
                {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
                    <>
                        <h3 className="font-medium text-lg mb-4">Current Search</h3>
                        <div className="mb-4 text-gray-600">
                            {searchFilter.title && (
                                <span className="inline-flex items-center gap-2.5 bg-blue-50 border border-[#7320f0] px-4 py-1.5 rounded">
                                    {searchFilter.title}
                                    <RxCrossCircled onClick={() => setSearchFilter((prev) => ({ ...prev, title: "" }))} className="cursor-pointer" />
                                </span>
                            )}
                            {searchFilter.location && (
                                <span className="ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-[#f05e20] px-4 py-1.5 rounded">
                                    {searchFilter.location}
                                    <RxCrossCircled onClick={() => setSearchFilter((prev) => ({ ...prev, location: "" }))} className="cursor-pointer" />
                                </span>
                            )}
                        </div>
                    </>
                )}

                <button onClick={() => setShoWFilter((prev) => !prev)} className="px-6 py-1.5 border border-gray-600 lg:hidden rounded">
                    {showFilter ? "Close" : "Filters"}
                </button>

                {/* Category Filter */}
                <div className={showFilter ? "" : "max-lg:hidden"}>
                    <h4 className="font-medium text-lg py-4">Search By Categories</h4>
                    <ul className="space-y-4 text-gray-600">
                        {JobCategories.map((category, ind) => (
                            <li className="flex items-center gap-3" key={ind}>
                                <input className="scale-125 border border-[#7320f0] rounded checked:bg-[#7320f0]" type="checkbox" onChange={() => handleCategoryChange(category)} checked={selectedCategories.includes(category)} />
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Location Filter */}
                <div className={showFilter ? "" : "max-lg:hidden pt-14"}>
                    <h4 className="font-medium text-lg py-4">Search By Locations</h4>
                    <ul className="space-y-4 text-gray-600">
                        {JobLocations.map((location, ind) => (
                            <li className="flex items-center gap-3" key={ind}>
                                <input className="scale-125 border border-[#7320f0] rounded checked:bg-[#7320f0]" type="checkbox" onChange={() => handleLocationChange(location)} checked={selectedLocations.includes(location)} />
                                {location}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Job Listings */}
            <div className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
                <h3 className="font-medium text-3xl py-2" id="job-list">
                    Latest Jobs
                </h3>
                <p className="mb-8">Get your desired job from top companies</p>
                <div className="grid grid-cols1 gap-4">
                    {filteredJobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((ele, ind) => (
                        <RelatedJobs key={ind} job={ele} />
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-10">
                        {/* Mobile: Prev / Next only */}
                        <div className="flex sm:hidden items-center gap-4">
                            <button disabled={currentPage === 1} onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 disabled:opacity-50">
                              Prev
                            </button>
                            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages)) } className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 disabled:opacity-50">
                              Next
                            </button>
                        </div>

                        {/* Desktop: Page numbers */}
                        <div className="hidden sm:flex items-center gap-2">
                            {/* Left Arrow */}
                            <button disabled={currentPage === 1} onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-gray-600 disabled:opacity-50" >
                              <IoIosArrowDropleft />
                            </button>

                            {/* Page Numbers */}
                            {getVisiblePages().map((page) => (
                                <button key={page} onClick={() => setCurrentPage(page)} className={`w-10 h-10 flex items-center justify-center border rounded-lg transition ${currentPage === page ? "bg-blue-100 border-blue-500 text-blue-600 font-medium" : "border-gray-300 text-gray-500 hover:bg-gray-100" }`} >
                                  {page}
                                </button>
                            ))}

                            {/* Right Arrow */}
                            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-gray-600 disabled:opacity-50" >
                              <IoIosArrowDropright />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );  
};

export default JobListing;
