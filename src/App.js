import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
        <Route path="/" element={
        <>
        <Header />
        <Home />
        </>
        }>
        </Route>
        <Route path="/login" element={<p>Login</p>}></Route>
        <Route path="/checkout" element={<>
          <Header />
          <p>Checkout</p>
        </>}></Route>
        </Routes>
      
    </div>
    </Router>    
  );
}

export default App;
