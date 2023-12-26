import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import MainContent from './components/MainContent';
import AllCards from './components/AllCards';
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      {isMobile ? (
        <p className='text-center' >Mobile Version of this Application is Under Construction.... Kindly use Tablet or desktop for viewing</p>
      ) : (<div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />}></Route>
          <Route path="/allCards" element={<AllCards />}></Route>
        </Routes>
        <Footer /></div>)}
    </>
  );
}

export default App;
