import React from 'react';

function Navbar2() {
    return (
        /* navbar */
        <nav className="bg-gray-500">
            {/*margin: auto(centers the div withn the nav)   */}
            <div className="max-w-6xl mx-auto px-4">
                <div className='flex justify-between'>
                    <div className='flex space-x-4'>

                        {/* logo */}
                        <div>
                            <a className='flex items-center py-5 px-2 text-white'>
                                <svg className="h-8 w-8 mr-1 text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className='font-bold'>Mood Dapp</span>
                            </a>
                        </div>

                        {/* primary nav */}
                        <div className='flex items-center space-x-1'>
                            <a className='py-5 px-3 text-white' href="">Home</a>
                            <a className='py-5 px-3 text-white' href="">About</a>
                        </div>
                    </div>

                    {/* secondary nav */}
                    <div className=' flex items-center space-x-1'>

                        <button className='btn btn-outline btn-accent m-1'>
                             Connect
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        
    );
}

export default Navbar2;