import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import { CartProvider } from '@/context/CartContext';
import './App.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-velmora-cream flex items-center justify-center p-8">
          <div className="text-center max-w-md">
            <h1 className="font-serif text-heading-2 text-velmora-charcoal mb-4">
              Something went wrong
            </h1>
            <p className="font-sans text-body text-velmora-muted mb-6">
              We apologize for the inconvenience. Please refresh the page or try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary px-8 py-3"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;
