import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import { ProviderContext } from "./components/Provider";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export function App() {
    return (
      
      
      <HashRouter>
        <ProviderContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        </ProviderContext>
      </HashRouter>
      
      
    )
  }
  