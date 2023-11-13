//import logo from './logo.svg';
import './App.css';
import {
  //BrowserRouter ,
  Routes,
  Route,
  
} from "react-router-dom";

//import Main from './components/Main';
import Home from './components/Home'; 
import Contact from './components/Contact';
//import Vision from './components/vision';
import Analytics from './components/Analytics';
import AppWeb from './components/App_web';
import MonitorDash from './components/monitor';
import Expert from './components/Expert';
import About from './components/about';
//import New from './components/new';

import Industry from './components/industry';
import Aws from './components/Aws';
import Career from './components/Career';
import Client from './components/client';
import Iot from './components/iot';
import Mobile from './components/mobile';
import ExpertMech from './components/expert_mech';
import ExpertAero from './components/expert_aero';
import ExpertHealth from './components/expert_health';
function App() {
  return (
    
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/Conatct" element={<Contact />} />
      <Route path="/about" element={<About />} />
      
      <Route path="/Client" element={<Client />} />
      <Route path="/Career" element={<Career />} />
      <Route path="/Analytics" element={<Analytics />} />
      <Route path="/App_web" element={<AppWeb />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/monitor" element={<MonitorDash />} />
      <Route path="/iot" element={<Iot />} />
      <Route path="/Aws" element={<Aws />} />
      <Route path="/industry" element={<Industry />} />
      

      <Route path="/expert" element={<Expert />} /> 
      <Route path="/expert_health" element={<ExpertHealth />} />    
      <Route path="/expert_mech" element={<ExpertMech />} />    
     <Route path="/expert_aero" element={<ExpertAero />} />
      
    </Routes>

    /*<>
    <Navbar/>
    
     
      <Header />
      <Main/>
      <Footer/>
      
    </>  
    */
    /*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
