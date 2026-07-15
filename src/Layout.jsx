import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import CartDrawer from '@/components/shared/CartDrawer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
