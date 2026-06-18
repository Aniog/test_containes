import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/common/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
