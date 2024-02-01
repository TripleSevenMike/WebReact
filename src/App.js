import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Signup from "./components/pages/Singup";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/services" exact Component={Services}/>
          <Route path="/products" exact Component={Products}/>
          <Route path="/sign-up" exact Component={Signup}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
