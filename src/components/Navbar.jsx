import React from 'react';

export const Navbar = (props) => {
    return (

        <nav className='from-gray-700 to-gray-600 text-white text-xl bg-gradient-to-r w-full h-16 box-border flex justify-between items-center px-2'>
            <label className=''>Mood Dapp</label>
         

                
                <ul className='flex p-3 justify-between '>
                    <li className='px-3'>Home</li>
                    <li>About</li>

                    
                </ul>
      
                <button onClick={props.connectWallet} className='btn btn-outline btn-accent m-1'>Connect</button>
            


        </nav>)
};
