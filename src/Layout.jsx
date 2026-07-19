import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-velmora-base">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
