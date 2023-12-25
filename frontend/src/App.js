import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import MainContent from './components/MainContent';
import AllCards from './components/AllCards';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />}></Route>
        <Route path="/allCards" element={<AllCards />}></Route>
      </Routes>
      <Footer />


    </>
  );
}

export default App;
