
import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers'
import Mood from './artifacts/contracts/Mood.sol/MoodDiary.json'

function App() {

  
  const moodAddress = "0xA4EDD8DF6cd250e2414b8B2e6d8525260087812B"
  const[mood, setMood ] = useState()
  



  return (
    

    <>

      <header className='bg-gray-700 text-white flex justify-center items-center p-4  text-5xl'>Mood Dapp</header>
      <div class=" bg-gray-800 min-h-screen flex flex-col justify-center items-center font-poppins">
        <p className='text-white  p-2'>Here we can set or get the mood:</p>
        <input className="input input-lg input-primary px-10" placeholder="Mood"></input>

        <div>

          <button class="btn btn-primary m-3">
            Get Mood
          </button>
          <button class="btn btn-primary m-3">
            Set Mood
          </button>
        </div>

      </div>
    </>
  );
}

export default App;

