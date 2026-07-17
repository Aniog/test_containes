import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
