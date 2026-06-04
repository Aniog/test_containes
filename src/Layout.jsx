import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import BakeryNav from '@/components/bakery/BakeryNav';
import BakeryFooter from '@/components/bakery/BakeryFooter';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Layout = () => {
  return (
    <div className="min-h-screen bg-cream font-sans flex flex-col">
      <ScrollToTop />
      <BakeryNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <BakeryFooter />
    </div>
  );
};

export default Layout;
