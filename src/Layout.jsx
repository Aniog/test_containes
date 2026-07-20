import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import CartDrawer from '@/components/cart/CartDrawer';
import Footer from '@/components/layout/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-velmora-cream">
      <Navbar />
      <CartDrawer />
      <Outlet />
      <Footer />
    </div>
  );
}
