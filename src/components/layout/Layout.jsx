import { useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-cream text-warm-900">
      <Nav />
      <main className={`flex-1 ${isHome ? '' : ''}`}>
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}