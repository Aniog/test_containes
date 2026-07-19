import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}