//App.jsx
// import React from 'react';

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import './App.css'
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; 
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import CataloguePage from './pages/CataloguePage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentPage from './pages/PaymentPage';
import ProfilePage from './pages/ProfilePage';
import data from './data.json';

function App() {
  const location = useLocation();
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    // If current page is not CataloguePage, reset the category filter
    if (location.pathname !== '/catalogue') {
      setCategoryFilter(false);
    }
  }, [location]);

  const shouldShowNavbar = location.pathname !== '/checkout' && location.pathname !== '/profile' && location.pathname !== '/payment';

  return (
    <Container sx={{ maxWidth: 'lg', mx: 'auto' }}>
    <ThemeProvider theme={theme}>
      <SearchBar />
      <Navbar categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />
    
    {/* <Header setCategoryFilter={setCategoryFilter} /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogue" element={<CataloguePage categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />} />
        <Route path="/product/:id" element={<ProductPage setCategoryFilter={setCategoryFilter} />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
    </Container>
  );
}

export default App;