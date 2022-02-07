
import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers'
import Mood from './artifacts/contracts/Mood.sol/MoodDiary.json'
import { data } from 'autoprefixer';

function App() {

  
  const moodAddress = "0xA4EDD8DF6cd250e2414b8B2e6d8525260087812B"
  const[mood, setMoodValue ] = useState()
  const[displayMessage, setDisplayMessage] = useState(false)
  const[moodFromSC, setMoodFromSC] = useState('Your mood is not set, please set your mood')

  
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function fetchMood() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(moodAddress, Mood.abi, provider)
      try {
        const data = await contract.getMood()
        setDisplayMessage(true)
        console.log('setting mood')
      setTimeout(function () {
        setDisplayMessage(false)
      }, 5000);
    
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }

  async function setMood() {
    if (!mood) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(moodAddress, Mood.abi, signer)
      const transaction = await contract.setMood(mood)
      await transaction.wait()
      //Getting the mood we just set from the SC
      const data = await contract.getMood()
      setMoodFromSC(data)
      console.log("Mood set!")
    }
  }

  const message = () => {
    if(displayMessage){
        return(
            <div>
              <p className='text-white'>Your mood is: {moodFromSC}</p>
            </div>
        )
      }
  };





  return (
    

    <>

      <header className='bg-gray-700 text-white flex justify-center items-center p-4  text-5xl'>Mood Dapp</header>
      <div class=" bg-gray-800 min-h-screen flex flex-col justify-center items-center font-poppins">
        <p className='text-white  p-2'>Here we can set or get the mood:</p>


        <input 

        className="input input-lg input-primary px-10" 
        onChange={e => setMoodValue(e.target.value)} 
        placeholder="Mood">

        </input>

        <div>

          <button class="btn btn-primary m-3" onClick={fetchMood}>
            Get Mood
          </button>
          <button class="btn btn-primary m-3 " onClick={setMood}>
            Set Mood
          </button>
         
        </div>
        {message()}
      </div>
    </>
  );
}

export default App;

