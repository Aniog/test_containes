import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';

const Layout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Layout;
