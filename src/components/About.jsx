import React from 'react';
import { Navbar } from './Navbar';

export const About = (props) => {

    return (
        <>
            <Navbar />
            <div className='min-h-screen bg-black flex items-center justify-center'>
                {/* Card Goes here */}
                <div className='relative  w-80'>
                    {/* Teal background */}
                    <div className='absolute -right-5 -bottom-5 bg-teal-400 h-full w-full rounded-xl'></div>


                    <div className='relative bg-gray-800 text-gray-50 rounded-xl p-8 space-y-5'>
                        {/* Teal line */}
                        <div className='h-1.5 w-20 bg-teal-400'></div>

                        {/*Title*/}
                        <div className=' text-4xl font-extrabold text-white'>About</div>
                          
                          <hr></hr>
                        {/* Main text */}
                        <p className=' leading-snug text-gray-400 font-poppins py-2'>In this Mood Dapp, a user can record their mood on the blockchain by entering their mood and pressing the set mood botton.  </p>
                        
                        <p className='leading-snug text-gray-400 font-poppins py-2'>The user can also retrive their recorded mood by pressing the <strong>get Mood</strong> button. </p>

                    </div>
                </div>
            </div>
        </>
    )
}