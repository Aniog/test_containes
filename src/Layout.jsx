import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Navbar />
      <CartDrawer />
      <Outlet />
      <Footer />
    </div>
  );
}