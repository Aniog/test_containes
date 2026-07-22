import { Outlet } from 'react-router-dom';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CartDrawer />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
