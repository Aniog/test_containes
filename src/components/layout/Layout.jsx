import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const [key, setKey] = useState(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
    setKey(pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Header />
      <main key={key} className="flex-1 page-enter">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
