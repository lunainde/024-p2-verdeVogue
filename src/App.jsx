//App.jsx
import React from 'react';
import { useState } from 'react'
import './App.css'
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; 
// import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import CataloguePage from './pages/CataloguePage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import data from './data.json';


function App() {
  return (
    <Container>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
    </Container>
  );
}

export default App;

