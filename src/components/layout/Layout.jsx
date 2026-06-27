import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <CartDrawer />
    </>
  );
}
