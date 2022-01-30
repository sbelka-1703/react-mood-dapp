import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          <input  className="input input-lg input-primary	 px-10" placeholder="Mood"></input>
        </p>
        <a className ="flex flex-col">
          <div>
          <button class="btn btn-primary m-3">
            Get Mood
          </button>
          <button class="btn btn-primary m-3">
            Set Mood
          </button>
          </div>
          

        </a>
      </header>
    </div>
  );
}

export default App;
