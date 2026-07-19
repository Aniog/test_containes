import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import ProductDetail from './pages/ProductDetail.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/shop" element={
          <Layout>
            <ShopPage />
          </Layout>
        } />
        <Route path="/product/:id" element={
          <Layout>
            <ProductDetail />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
