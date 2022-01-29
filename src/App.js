import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
      
      <header className='bg-gray-800 text-white flex justify-center p-2  text-lg'>Mood Dapp</header>
      <div class = " bg-gray-800 min-h-screen flex flex-col justify-center items-center ">
      
        <input className='input input-mg'></input>
       
       <div>
          
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
            Get Mood
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
            Set Mood
          </button>

          

        </div>
      </div>
    </>
  );
}

export default App;
