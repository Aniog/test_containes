import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/collections" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/about" element={
                <main className="pt-20">
                  <div className="container py-20">
                    <h1 className="font-serif text-4xl md:text-5xl mb-6 text-center">About Velmora</h1>
                    <p className="text-center max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                      Our story is one of passion for beautiful jewelry and commitment to quality. 
                      Founded with the belief that everyone deserves to feel luxurious, we create 
                      demi-fine pieces that bridge the gap between everyday elegance and accessible luxury.
                    </p>
                  </div>
                </main>
              } />
              <Route path="/journal" element={
                <main className="pt-20">
                  <div className="container py-20">
                    <h1 className="font-serif text-4xl md:text-5xl mb-6 text-center">Journal</h1>
                    <p className="text-center" style={{ color: 'var(--color-text-secondary)' }}>
                      Coming soon...
                    </p>
                  </div>
                </main>
              } />
              <Route path="*" element={
                <main className="pt-20">
                  <div className="container py-20 text-center">
                    <h1 className="font-serif text-4xl mb-4">Page Not Found</h1>
                    <a href="/" className="btn btn-outline">Go Home</a>
                  </div>
                </main>
              } />
            </Routes>
          </div>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
