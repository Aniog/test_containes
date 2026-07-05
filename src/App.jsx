import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import HomePage from '@/pages/HomePage';
import ProductPage from '@/pages/ProductPage';
import CollectionPage from '@/pages/CollectionPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-background">
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="*" element={
              <main className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="font-serif text-4xl mb-4">Page Not Found</h1>
                  <a href="/" className="text-accent hover:underline">Return Home</a>
                </div>
              </main>
            } />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
