import './App.css';
import {Route,Routes} from "react-router-dom";
import About from "./components/About";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
