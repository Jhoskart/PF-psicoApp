import './App.css';
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home.jsx";
import Psychologists from './Components/Psychologists/Psychologists.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/psico' element={<Psychologists />} />
      </Routes>
    </div>
  );
}

export default App;
