import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="*" element={
              <div className="min-h-screen pt-32 pb-20">
                <div className="container text-center">
                  <h1 className="mb-4">Page Not Found</h1>
                  <p className="text-slate mb-8">The page you're looking for doesn't exist.</p>
                  <a href="/" className="btn-primary inline-block">Go Home</a>
                </div>
              </div>
            } />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
