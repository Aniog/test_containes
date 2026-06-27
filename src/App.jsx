import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="collections" element={<ShopPage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="about" element={<ComingSoonPage title="Our Story" />} />
            <Route path="journal" element={<ComingSoonPage title="Journal" />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

// Placeholder for pages not yet implemented
function ComingSoonPage({ title }) {
  return (
    <main className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-center">
        <h1
          className="text-3xl md:text-4xl text-[var(--color-text-primary)] mb-4"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {title}
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Coming soon. Stay tuned!
        </p>
      </div>
    </main>
  );
}

export default App;
