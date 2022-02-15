import { useEffect, useRef, useState } from "react";
import { ethers, providers } from 'ethers'
import Mood from '../artifacts/contracts/Mood.sol/MoodDiary.json'
import { Navbar } from '../components/Navbar';
import Web3Modal from "web3modal";



function Home() {

  const web3ModalRef = useRef();


  const moodAddress = "0xA4EDD8DF6cd250e2414b8B2e6d8525260087812B"
  const[mood, setMoodValue ] = useState()
  const[displayMessage, setDisplayMessage] = useState(false)
  const[moodFromSC, setMoodFromSC] = useState('Your mood is not set, please set your mood')
  const [walletConnected, setWalletConnected] = useState(false);


  
  // async function requestAccount() {
  //   await window.ethereum.request({ method: 'eth_requestAccounts' });
  // }

  const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };


const getProviderOrSigner = async (needSigner = false) => {
  
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 4) {
      window.alert("Change the network to Rinkeby");
      throw new Error("Change network to Rinkeby");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };
  

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
      // await requestAccount()
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

  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    if (!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      web3ModalRef.current = new Web3Modal({
        network: "rinkeby",
        providerOptions: {},
        
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  }, [walletConnected]);





  return (
    

    <>
      
      <Navbar
      connectWallet = {connectWallet}/>
       
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

export default Home;