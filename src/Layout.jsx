import { useEffect, useRef } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const Layout = ({ children }) => {
  const mainRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-velmora-bg">
      <Navigation />
      <main ref={mainRef}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
