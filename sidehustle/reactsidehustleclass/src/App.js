import "./App.css";
// import About from './component/About/About';
import Home from "./component/Home/Home";

import Experience from "./component/Experience/experience";
import Navbar from "./component/Navbar/Navbar";
import Myself from "./component/Myself/Myself";
 import Footer from "./component/Footer/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/myself" element={<Myself />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
