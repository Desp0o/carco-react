import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";

export function App() {
    return (
      
      
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
      
      
    )
  }
  