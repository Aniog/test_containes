import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const pageTitles = {
  '/': 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China',
  '/services': 'Services | SSourcing China',
  '/how-it-works': 'How It Works | SSourcing China',
  '/products': 'Products We Source | SSourcing China',
  '/case-studies': 'Case Studies | SSourcing China',
  '/blog': 'Blog | SSourcing China',
  '/contact': 'Contact | SSourcing China',
};

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || 'SSourcing China';
    document.title = title;
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}