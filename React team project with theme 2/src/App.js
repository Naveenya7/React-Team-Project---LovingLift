import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Signup from './Components/Pages/Signup'; 
import Login from './Components/Pages/Login';
import './App.css';
import FundRaiserForm from './Components/Pages/FundRaiserForm';



function App() {
  return (
    <>
    {/* <Particlebackground/> */}
    <video src='./BGVIDEO.mp4' autoPlay loop muted id="background-video" />
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<Signup />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/startafundraiser' element={<FundRaiserForm/>}/>
          

        </Routes>
      </Router>
    </>
  //   <div>
  //   <ParticlesBackground />
  //   {/* Your other components and content */}
  // </div>
  );
}

export default App;
