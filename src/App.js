import React from "react";
import { Routes ,Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import "./AboutCss.css";
import "./ContactPage.css";
import "./UploadStyle.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Category from "./components/Category";
import AdminPanel from "./components/adminPanel";

const App = () => {
  return (
  <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/about" element={<About/>}> </Route>
      <Route path="/contact" element={<Contact/>}> </Route>
      <Route path="/Category" element={<Category/>}> </Route>
      <Route path="/AdminPanel" element={<AdminPanel/>}> </Route>
      
    </Routes>
    <Footer/>

  </div>
  )
}

export default App;


