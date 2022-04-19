
import './App.css';
// import About from './component/About/About';
import Home from './component/Home/Home';

import Experience from './component/Experience/experience'
import Navbar from './component/Navbar/Navbar';
import Myself from './component/Myself/Myself';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div> 
      <Navbar/>
      <Home />
      {/* <About /> */}
      <Myself />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
