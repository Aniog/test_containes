import React from 'react';
import Navbar from './components/ui/Navbar.jsx';
import Footer from './components/ui/Footer.jsx';
import CartDrawer from './components/ui/CartDrawer.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-background selection:bg-accent selection:text-accent-foreground">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CartDrawer />
        <Toaster position="bottom-right" />
      </div>
    </CartProvider>
  );
};

export default Layout;
