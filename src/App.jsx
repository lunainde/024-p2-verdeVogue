//App.jsx
import React from 'react';
import { useState } from 'react'
import './App.css'
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; 
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import CataloguePage from './pages/CataloguePage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import data from './data.json';


function App() {
  const [categoryFilter, setCategoryFilter] = useState("all");

  return (
    <Container sx={{ maxWidth: 'lg', mx: 'auto' }}>
    <ThemeProvider theme={theme}>
    <Header setCategoryFilter={setCategoryFilter} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogue" element={<CataloguePage categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />} />
        <Route path="/product/:id" element={<ProductPage setCategoryFilter={setCategoryFilter} />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
    </Container>
  );
}

export default App;

