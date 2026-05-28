import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/sections/Navbar';
import FooterSection from './components/sections/FooterSection';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#FDF6EC]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main>{children}</main>
      <FooterSection />
    </div>
  );
};

export default Layout;
