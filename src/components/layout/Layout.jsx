import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-velmora-cream text-velmora-charcoal">
      <Navbar />
      <CartDrawer />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
