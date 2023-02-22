import React from 'react'
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import SignUpForm from './pages/signup/sign-up';
import {Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sign-up" element={<SignUpForm/>} />
      </Routes>
    </>
  )
}

export default App