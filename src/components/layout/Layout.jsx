import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartDrawer } from '@/components/product/CartDrawer';

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-velmora-cream">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
