import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartDrawer } from './ui/CartDrawer';

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
