import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-cream text-text-primary">
      <Navbar />
      <main>{children}</main>
      {!isHome && <div className="h-16 md:h-20" />}
      <Footer />
      <CartDrawer />
    </div>
  );
}
