import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import CartDrawer from './CartDrawer';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
