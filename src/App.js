import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components/Navbar";
import {About} from "./components/About"

function App(props) {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;

