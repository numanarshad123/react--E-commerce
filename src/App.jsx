import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import { Routes, Route, Outlet, Link } from "react-router-dom";


export default function App() {
  return (
    <>
      <Banner />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer/>
    </>
  );
}