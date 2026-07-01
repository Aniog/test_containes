import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import CartDrawer from '../components/CartDrawer';
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-velmora-bg-primary">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}