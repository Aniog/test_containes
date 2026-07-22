import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import { CartProvider } from '@/contexts/CartContext';

const Layout = () => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-velmora-cream-50">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default Layout;
