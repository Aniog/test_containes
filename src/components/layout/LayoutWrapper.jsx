import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from '../CartDrawer';

export default function LayoutWrapper() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}