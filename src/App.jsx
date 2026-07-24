import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Collections from './pages/Collections.jsx';
import { Toaster } from "@/components/ui/sonner";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  return (
    <Router>
      <Layout cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity}>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/shop" element={<Collections addToCart={addToCart} />} />
          <Route path="/collections" element={<Collections addToCart={addToCart} />} />
        </Routes>
      </Layout>
      <Toaster position="bottom-right" />
    </Router>
  );
}

export default App;
EOF > src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Collections from './pages/Collections.jsx';
import { Toaster } from "@/components/ui/sonner";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  return (
    <Router>
      <Layout cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity}>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/shop" element={<Collections addToCart={addToCart} />} />
          <Route path="/collections" element={<Collections addToCart={addToCart} />} />
        </Routes>
      </Layout>
      <Toaster position="bottom-right" />
    </Router>
  );
}

export default App;
