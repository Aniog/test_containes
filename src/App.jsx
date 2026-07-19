import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import { Home } from './pages/Home.jsx';
import { Product } from './pages/Product.jsx';
import { Collection } from './pages/Collection.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="collections/:category?" element={<Collection />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
