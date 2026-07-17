import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import { CartProvider } from '@/context/CartContext';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ProductPage from '@/pages/ProductPage';

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(e) { return { error: e }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{padding:'2rem',fontFamily:'monospace',background:'#fff',color:'#c00',minHeight:'100vh'}}>
          <h2>Runtime Error</h2>
          <pre style={{whiteSpace:'pre-wrap'}}>{String(this.state.error)}</pre>
          <pre style={{whiteSpace:'pre-wrap',fontSize:'0.75rem',color:'#666'}}>{this.state.error?.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-parchment pt-32 flex items-center justify-center">
      <div className="text-center">
        <p className="font-sans text-xs uppercase tracking-widest3 text-champagne mb-3">Coming Soon</p>
        <h1 className="font-serif text-4xl font-light text-velvet">{title}</h1>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CartProvider>
          <div className="flex flex-col min-h-screen bg-parchment">
            <Nav />
            <CartDrawer />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/product/:slug" element={<ProductPage />} />
                <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
                <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
                <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
