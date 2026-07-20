import { useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import CartDrawer from '@/components/cart/CartDrawer';

// Routes where the nav should be transparent over a dark hero (only the home page).
const TRANSPARENT_ROUTES = new Set(['/']);

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const navVariant = TRANSPARENT_ROUTES.has(pathname) ? 'auto' : 'solid';

  return (
    <div className="flex min-h-screen flex-col bg-bone text-espresso">
      <Nav variant={navVariant} />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
