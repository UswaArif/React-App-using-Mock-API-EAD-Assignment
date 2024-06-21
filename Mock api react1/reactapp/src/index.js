import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import { Navbar, Footer } from './pages/layout';
import { Home } from './pages/home';
import { Products } from './pages/products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <h1>CRUD OPERATION USING MOCK API</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

