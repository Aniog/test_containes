import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Navbar />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  );
}