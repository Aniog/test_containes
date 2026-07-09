import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from '@/components/cart/CartDrawer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-velmora-cream">
      <Navbar />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
      <CartDrawer />
    </div>
  );
}
