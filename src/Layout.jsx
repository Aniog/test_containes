import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import CartDrawer from '@/components/layout/CartDrawer';
import Footer from '@/components/layout/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-velvet-50 text-velvet-900">
      <Navbar />
      <CartDrawer />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}