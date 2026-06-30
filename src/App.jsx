import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="about" element={<AboutPlaceholder />} />
            <Route path="journal" element={<JournalPlaceholder />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

function AboutPlaceholder() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-4xl mb-4">Our Story</h1>
        <p className="text-base-muted">Coming soon.</p>
      </div>
    </div>
  );
}

function JournalPlaceholder() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-4xl mb-4">Journal</h1>
        <p className="text-base-muted">Coming soon.</p>
      </div>
    </div>
  );
}

export default App;
