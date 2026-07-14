import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { CartProvider } from '../../context/CartContext';

export function Layout() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-warm-ivory">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default Layout;
