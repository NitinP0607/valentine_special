import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Memories from "./pages/Memories/Memories";
import More from "./pages/More/More";
import NavbarHome from "./components/NavbarHome/NavbarHome";
import Explore from "./pages/Explore/Explore";
import About from "./components/About/About";
import Footer from "./pages/Footer/Footer";

const App = () => {
  return (
    <>
      <NavbarHome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/more" element={<More />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
