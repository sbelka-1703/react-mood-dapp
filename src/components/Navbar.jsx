import React from 'react';
import {useNavigate} from "react-router-dom"

export const Navbar = (props) => {

    let navigate = useNavigate();
    return (

        <nav className='from-gray-700 to-gray-600 text-white text-xl bg-gradient-to-r w-full h-16 box-border flex justify-between items-center px-2'>
            <label className=''>Mood Dapp</label>
         

                
                <ul className='flex p-3 justify-between '>
                    <li className='px-3 cursor-pointer	' onClick={() =>{navigate("/")}}>Home</li>
                    <li className='px-3 cursor-pointer	'onClick={() =>{navigate("/about")}}>About</li>

                    
                </ul>
      
                <button onClick={props.connectWallet} className='btn btn-outline btn-accent m-1'>Connect</button>
            


        </nav>)
};
