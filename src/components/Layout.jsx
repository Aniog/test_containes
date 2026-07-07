import { Navbar } from '@/components/ui/Navbar';
import { CartDrawer } from '@/components/ui/CartDrawer';
import { Footer } from '@/components/ui/Footer';

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-velmora-cream">
      <Navbar />
      <CartDrawer />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
