import logo from "./logo.svg";
import "./App.css";
import Prob from "./components/Prob";
import { Routes, Route } from 'react-router-dom'
import Stats from "./components/Stats";
import Prediction from "./components/Prediction";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Stats />} />
        <Route exact path="/prob" element={<Prob />} />
        <Route exact path="/prediction" element={<Prediction />} />

      </Routes>
    </div>
  );
}

export default App;
