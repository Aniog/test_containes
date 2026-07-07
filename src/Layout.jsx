import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="min-h-screen bg-cream">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      <CartDrawer />
    </>
  );
};

export default Layout;